const express=require('express');
const {
    placeOrder,
    getOrderById,
    getOrders
}=require('../controllers/order.controller');
const router=express.Router();
router.get('/',getOrders);
router.get('/ordered/:id',getOrderById);
router.post('/placeOrder/:id',placeOrder)
module.exports=router;