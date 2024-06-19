const Order = require('../models/Order');
const CustomError = require('../utils/CustomError.js');
const placeOrder = async (req, res,next) => {
    const { items, totalPrice } = req.body;
    try {
        const newOrder = new Order({ items, totalPrice, orderedBy: req.params.id });
        await newOrder.save();
        res.json(newOrder);
    } catch (err) {
        console.error(err.message);
        next(new CustomError('Server Error'));
    }
};

const getOrders = async (req, res,next) => {
    try {
        const orders = await Order.find({ orderedBy: req.user.id }).populate('items.item');
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        next(new CustomError('Server Error'));
    }
};

const getOrderById = async (req, res,next) => {
    try {
        const order = await Order.findById(req.params.id).populate('items.item');
        if (!order) {
            next(new CustomError('order not found',404));
        }
        res.json(order);
    } catch (err) {
        console.error(err.message);
        next(new CustomError('Server Error'));
    }
};
module.exports = {
    placeOrder,
    getOrderById,
    getOrders
}

