var express = require('express');
var controller = require('./charts.controller');
var router = express.Router();

router.post('/', controller.send);

module.exports = router;