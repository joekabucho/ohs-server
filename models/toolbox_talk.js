// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var toolbox_talkSchema = new mongoose.Schema({
   resource_plan : { type: Boolean },
   createdAt: { type: Date, default: Date.now },
   necessary_proc : { type: Boolean },
   gov_monitor : { type: Boolean },
   h2s_training: { type: Boolean },
   hard_hat: { type: Boolean },
   boots: { type: Boolean },
   coverwalls: { type: Boolean },
   hearing_protection: { type: Boolean },
   other_ppe: { type: Boolean },
   scope : { type: Boolean },
   material: { type: Boolean },
   traffic_control: { type: Boolean },
   mobile_phones: { type: Boolean },
   incident_reporting: { type: Boolean },
   smoking: { type: Boolean },
   speed_limits: { type: Boolean },
   first_aid_kit: { type: Boolean },
   emergency: { type: Boolean },
   regulatory_requests: { type: Boolean },
   fire_permit: { type: Boolean },
   task_hazard: { type: Boolean },
   site_work_permit: { type: Boolean },
   ground_disturbance: { type: Boolean },
   other_permit_forms: { type: Boolean },
   fire_extinguishers: { type: Boolean },
   prestat_check: { type: Boolean },
   back_up_alarm: { type: Boolean },
   positive_air_shafts: { type: Boolean },
   people_onboard: { type: Number },
   wall_heads: { type: Boolean },
   ground_disturbance: { type: Boolean },
   others_on_site: { type: Boolean },
   third_party_support: { type: Boolean },
   signs : { type: Boolean }
     

});

// Return model
module.exports = restful.model('Toolbox_talk', toolbox_talkSchema);