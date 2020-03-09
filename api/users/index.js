var express = require('express');
var controller = require('./users.controller');
var router = express.Router();

router.post('/invite', controller.invite);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.post('/login', controller.login);
router.post('/verify', controller.emailVerify);
router.post('/resetcode', controller.resetPasswordCode);
router.post("/resetpassword", controller.resetPass);
router.post('/register', controller.create);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;