var express = require('express');
var router = express.Router();
var user_infoController = require('../controllers/user_infoController.js');

/*
 * GET
 */
router.get('/', user_infoController.list);

/*
 * GET
 */
router.get('/:id', user_infoController.show);

/*
 * GET
 */
router.get('/by_user/:id', user_infoController.getByUserId);

/*
 * POST
 */
router.post('/', user_infoController.create);

/*
 * PUT
 */
router.put('/:id', user_infoController.update);

/*
 * DELETE
 */
router.delete('/:id', user_infoController.remove);

module.exports = router;
