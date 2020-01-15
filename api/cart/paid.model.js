const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Paid = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    user: { type: Schema.Types.ObjectId },
    items:{ type: [] },
    status: { type: String },
    amount: {type: Number},
    transactionId: {type: String},
    date: {type: Date}
});

module.exports = mongoose.model('Paid', Paid);