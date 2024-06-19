const CustomError = require('../utils/CustomError.js');
const Menu=require('../models/Menu');
const getMenu = async (req,res,next) => {
    try{
        const menu = await Menu.find();
        res.status(200).send({ success:true, data:menu });
    } catch (err) {
        console.error(err.message);
        next(new CustomError('Server Error'));
    }
}
const addMenuItem = async (req,res,next) => {
    const { name, description, price } = req.body;
    try { 
        const newItem = new Menu({ name, description, price });
        await newItem.save();
        res.status(200).send({success:true,message:'data added successfully'});
    } catch (err) {
        console.error(err.message);
        next(new CustomError('Server Error'));
    }
}
module.exports = {
    addMenuItem,
    getMenu
}
