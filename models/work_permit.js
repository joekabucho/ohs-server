// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var work_permitSchema = new mongoose.Schema({
   createdAt: { type: Date, default: Date.now },
    created_by: { type: String},
    approver_by: { type: String},
    ammendments : { type: String},
    issued_by: { type: String},
    site_name: { type: String},
    project: { type: String},
    technician: { type: String},
    comments: { type: String},
    valid_from: { type: Date},
    issue_to:{type:String},
    valid_from: { type: Date},
    valid_to: { type: Date}
     

});

// Return model
module.exports = restful.model('Work_permit', work_permitSchema);