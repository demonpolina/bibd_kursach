const Router = require('express');
const router = new Router();
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const branchRouter = require('./branchRouter');
const basketRouter = require('./basketRouter');
const pdfRouter = require('./pdfRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/branch', branchRouter);
router.use('/product', productRouter);
router.use('/basket', basketRouter);
router.use('/pdf_create', pdfRouter);
module.exports = router;
