// Dependencies
var express = require('express');
const app = express();
var router = express.Router();
const cors = require('cors');

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Models
var Jobcard = require('../models/jobcard');
var Induction_checklist = require('../models/induction_checklist');
var Image_upload = require('../models/image_upload');
var Toolbox_talk = require('../models/toolbox_talk');
var Work_permit = require('../models/work_permit');
var Job_analysis = require('../models/job_analysis');
var Incident = require('../models/icident');


// Routes
Jobcard.methods(['get', 'put', 'post', 'delete']);
Jobcard.register(router, '/jobcard');

Induction_checklist.methods(['get', 'put', 'post', 'delete']);
Induction_checklist.register(router, '/induction_checklist');

Image_upload.methods(['get', 'put', 'post', 'delete']);
Image_upload.register(router, '/image_upload');

Toolbox_talk.methods(['get', 'put', 'post', 'delete']);
Toolbox_talk.register(router, '/toolbox_talk');

Work_permit.methods(['get', 'put', 'post', 'delete']);
Work_permit.register(router, '/work_permit');

Job_analysis.methods(['get', 'put', 'post', 'delete']);
Job_analysis.register(router, '/job_analysis');

Incident.methods(['get', 'put', 'post', 'delete']);
Incident.register(router, '/incident');

// Return router
module.exports = router;