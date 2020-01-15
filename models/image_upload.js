// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var image_uploadSchema = new mongoose.Schema({
    filename:{type: String},
    createdAt: { type: Date, default: Date.now },
    img: { data: Buffer, contentType: String },
    location : {type: String},
    site : {type: String}



});

// Return model
module.exports = restful.model('Image_upload', image_uploadSchema);