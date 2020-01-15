// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Jobcard = require('../models/jobcard');
var Induction_checklist = require('../models/induction_checklist');
var Image_upload = require('../models/image_upload');
var Toolbox_talk = require('../models/toolbox_talk');


// Routes
Jobcard.methods(['get', 'put', 'post', 'delete']);
Jobcard.register(router, '/jobcard');

Induction_checklist.methods(['get', 'put', 'post', 'delete']);
Induction_checklist.register(router, '/induction_checklist');

Image_upload.methods(['get', 'put', 'post', 'delete']);
Image_upload.register(router, '/image_upload');

Toolbox_talk.methods(['get', 'put', 'post', 'delete']);
Toolbox_talk.register(router, '/toolbox_talk');

// Return router
module.exports = router;