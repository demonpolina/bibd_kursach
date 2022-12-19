const Router = require('express');
const router = new Router();
const branchController = require('../controllers/branchController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), branchController.create);
router.get('/', branchController.getAll);

module.exports = router;
