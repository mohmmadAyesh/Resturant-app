const express=require('express');
const AuthMiddleware=require('../middlewares/auth.js');
const {
    getMenu,
    addMenuItem
}=require('../controllers/menu.controller');
const router=express.Router();
router.get('/',getMenu);
router.post('/add',AuthMiddleware,addMenuItem);
module.exports=router;