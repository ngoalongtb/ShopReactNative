var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController.js');

/*
 * GET
 */
router.get('/', productController.list);

/*
 * GET
 */
router.get('/:id', productController.show);

/*
 * GET
 */
router.get('/by-name/:name', productController.getByProductName);

/*
 * GET
 */
router.get('/by-category/:id', productController.getByCategoryId);
/*
 * POST
 */
router.post('/', productController.create);

/*
 * PUT
 */
router.put('/:id', productController.update);

/*
 * DELETE
 */
router.delete('/:id', productController.remove);

module.exports = router;
