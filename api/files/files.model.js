const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Templates = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String },
    url: {type: String},
    user: { type: Schema.Types.ObjectId},
    uploadedby: {  type: Schema.Types.ObjectId},
    amount:{type: String},
    filename:{type: String},
    date: { type: String },
});

module.exports = mongoose.model('Templates', Templates);