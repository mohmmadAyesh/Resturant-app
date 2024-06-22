const express=require('express');
const AuthMiddleware=require('../middlewares/auth.js');
const {
    signup,
    login,
    getAuthUser
}=require('../controllers/auth.controller.js');
const auth = require('../middlewares/auth.js');
const router=express.Router();
router.post('/signup',signup);
router.post('/login',login);
router.get('/',AuthMiddleware,getAuthUser);
module.exports=router;