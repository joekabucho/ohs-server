// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var incidentSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    serious_injury : { type:Boolean },
    serious_incident : { type:Boolean },
    first_aid : { type:Boolean },
    medical_aid : { type:Boolean },
    potential_serious: { type: Boolean },
    property_damage:{ type: Boolean },
    production_loss: { type: Boolean },
    date_time_reported: { type: Date },
    worker_job_title : { type:String },
    date_of_incident : { type:Date },
    time : { type:String },
    first_aider : { type:Boolean },
    supervisor : { type:Boolean },
    another_worker : { type:Boolean },
    ohs_committee_member : { type:Boolean },
    ohs_representative : { type:Boolean },
    employer : { type:Boolean },
    prime_contractor : { type:Boolean },
    other_person : { type:Boolean },
   


     

});

// Return model
module.exports = restful.model('Incident', incidentSchema);