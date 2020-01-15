var express = require('express');
var controller = require('./cart.controller');
var router = express.Router();

router.post('/', controller.add);
router.get('/', controller.getAll);
router.post('/user', controller.getAUsers);
router.post('/add', controller.addItem);
router.delete('/:id', controller.deleteItem);
router.post('/pay', controller.checkout);
router.get('/payments', controller.getPayments);
router.get('/paymentsbyuser', controller.getUsersPayments);

module.exports = router;