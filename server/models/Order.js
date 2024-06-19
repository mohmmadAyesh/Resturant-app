const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    items: [{
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
        quantity: { type: Number, required: true }
    }],
    status: { type: String, enum: ['Processing', 'Preparing', 'Ready', 'Delivered'], default: 'Processing' },
    totalPrice: { type: Number, required: true },
    orderedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});
module.exports=mongoose.model('Order',OrderSchema);