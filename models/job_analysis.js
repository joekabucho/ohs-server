// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var jobAnalysiSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
   job_title  : { type:String },
   location : { type:String },
   summary : { type:String },
   working_condition : { type:String },
   job_duties : { type:String },
    machine_used: { type:String },
   hazards : { type:String },
   qualifications : { type:String },
   experience : { type:String },
   training : { type:String },
     
});

// Return model
module.exports = restful.model('JobAnalysis', jobAnalysiSchema);