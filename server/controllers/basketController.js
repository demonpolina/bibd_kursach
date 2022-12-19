const { BasketProduct, Basket, Product } = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController {
  async create(req, res) {
    const { productId, userId } = req.body;
    console.log(productId, userId);
    const { id } = await Basket.findOne({
      where: {
        userId,
      },
    });

    const basket = await BasketProduct.create({
      productId,
      basketId: id,
    });
    return res.json(basket);
  }
  async getAllProductByBasketId(req, res) {
    const { userId } = req.query;

    const { id } = await Basket.findOne({
      where: {
        userId,
      },
    });

    const productesId = await BasketProduct.findAll({
      attributes: ['productId'],
      where: {
        basketId: id,
      },
    });
    console.log(productesId)
    const com = [];


    productesId.forEach((element) => {
      com.push(element.productId);
    });
    console.log(com)
    const productes = await Product.findAll({
      where: {
        id: [...com],
      },
    });
    return res.json(productes);
  }

  async deleteProduct(req, res) {
    const { productId } = req.query;

    const count = await BasketProduct.destroy({ where: { productId: productId } });
    return res.json(count);
  }
}

module.exports = new BasketController();
