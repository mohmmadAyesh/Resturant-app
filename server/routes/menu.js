const express=require('express');
const {
    getMenu,
    addMenuItem
}=require('../controllers/menu.controller');
const router=express.Router();
router.get('/',getMenu);
router.post('/add',addMenuItem);
module.exports=router;