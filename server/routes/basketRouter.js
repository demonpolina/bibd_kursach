const Router = require('express');
const basketController = require('../controllers/basketController');
const router = new Router();

router.post('/', basketController.create);
router.get('/', basketController.getAllProductByBasketId);
router.delete('/', basketController.deleteProduct);
module.exports = router;
