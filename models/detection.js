// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

var detectionSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    person_with_helmet : { type:Number },
    person_without_helmet : { type:Number }



});

// Return model
module.exports = restful.model('Detection', detectionSchema);