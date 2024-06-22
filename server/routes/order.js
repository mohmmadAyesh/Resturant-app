const express=require('express');
const AuthMiddleware=require('../middlewares/auth.js');
const {
    placeOrder,
    getOrderById,
    getOrders
}=require('../controllers/order.controller');
const router=express.Router();
router.get('/',AuthMiddleware,getOrders);
router.get('/ordered/:id',AuthMiddleware,getOrderById);
router.post('/placeOrder',AuthMiddleware,placeOrder);
module.exports=router;