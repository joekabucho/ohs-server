const controller = require('./file.controller');
var express = require('express');
var router = express.Router();

router.post('/', controller.upload);
router.get('/', controller.getAll);
router.post('/user', controller.getUsers);

module.exports = router;