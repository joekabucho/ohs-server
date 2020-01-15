// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var jobcardSchema = new mongoose.Schema({
    name: { type: String },
    createdAt: { type: Date, default: Date.now },
    customer:{ type: String },
    starting_date: { type: Date },
    end_date: { type: Date },
    workorder_number: { type:String },
    location_name: { type: String },
    job_description: { type: String },
    job_steps: { type: String },
    hazards: { type: String },
    uncontainable_risks: { type: String },
    control_measures: { type: String },
    controlled_risk_levels: { type: String },
    status: { type: String },
    amount_invoiced: { type: Number },

     

});

// Return model
module.exports = restful.model('Jobcard', jobcardSchema);