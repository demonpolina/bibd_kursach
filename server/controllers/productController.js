const uuid = require('uuid');
const path = require('path');
const { Product, ProductInfo, Branch } = require('../models/models');
const ApiError = require('../error/ApiError');

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, productBranch, typeId, description } = req.body;

      const { img } = req.files;

      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const product = await Product.create({
        name,
        price,
        description,
        typeId,
        img: fileName,
      });

      // if (productBranch) {
      //   product = JSON.parse(productBranch);
      //   productBranch.forEach((element) => {
      //     Genre.create({
      //       name: element.name,
      //       comicsId: comics.id,
      //     });
      //   });
      // }

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { typeId, limit = 9, page = 1, name } = req.query;
    let offset = page * limit - limit;
    let product;
    let searchProduct;
    if (!typeId) {
      product = await Product.findAndCountAll({
        limit,
        offset,
      });
    }
    if (typeId) {
      product = await Product.findAndCountAll({
        where: {
          typeId,
        },
        limit,
        offset,
      });
    }
    if (typeId && name) {
      searchProduct = await Product.findAndCountAll({
        where: {
          name,
        },
        limit,
        offset,
      });
      if (searchProduct.count == 0) {
        product = await Product.findAndCountAll({
          limit,
          offset,
        });
      } else {
        product = searchProduct;
      }
    }
    if (!typeId && name) {
      searchProduct = await Product.findAndCountAll({
        where: {
          name,
        },
        limit,
        offset,
      });
      if (searchProduct.count == 0) {
        product = await Product.findAndCountAll({
          limit,
          offset,
        });
      } else {
        product = searchProduct;
      }
    }
    if (!typeId && !name) {
      product = await Product.findAndCountAll({
        limit,
        offset,
      });
    }
    return res.json(product);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: {
        id,
      },
      // include: [
      //   {
      //     model: Genre,
      //     as: 'comicsGenres',
      //   },
      // ],
    });
    return res.json(product);
  }
  async deleteProduct(req, res) {
    const { productId } = req.query;
    console.log(productId);
    const count = await Product.destroy({ where: { id: productId } });
    return res.count;
  }
}

module.exports = new ProductController();
