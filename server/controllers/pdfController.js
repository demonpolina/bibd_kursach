const { Product } = require('../models/models');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const ApiError = require('../error/ApiError');

class PdfController {
  async create(req, res) {
    const productes = await Product.findAll();

    let pdfDoc = new PDFDocument();
    pdfDoc.pipe(fs.createWriteStream('Product.pdf'));

    productes.forEach((element) => {
      pdfDoc.text(`${element.id}: ${element.name}, price: ${element.price}`);
      console.log(element.img);
      pdfDoc.image(`D:/kur/server/static/${element.img}`, {
        width: 150,
        height: 150,
      });
      pdfDoc.moveDown(0.5);
    });

    pdfDoc.end();
    return res.json(true);
  }
}

module.exports = new PdfController();
