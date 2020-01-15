const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    user: { type: Schema.Types.ObjectId },
    items:{ type: [] },
    status: { type: String },
    amount: {type: Number}
});

module.exports = mongoose.model('Cart', Cart);