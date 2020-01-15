// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var induction_checklistSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    location: { type: String },
    manager:{ type: String },
    position: { type: String },
    workplace: { type: String },
    competencies : { type:Boolean },
    permits : { type:Boolean },
    reporting_incidents : { type:Boolean },
    workplace_safety : { type:Boolean },
    safe_work_method : { type:Boolean },
    specialised_equipment : { type:Boolean },
    ppe_equipment : { type:Boolean },
    assembly_points : { type:Boolean },
    medical_facility : { type:Boolean },
    emergency_services : { type:Boolean },
    emergency_communication : { type:Boolean },
    firefighting : { type:Boolean }


     

});

// Return model
module.exports = restful.model('Induction_checklist', induction_checklistSchema);