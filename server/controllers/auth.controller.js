const User=require('../models/User.js');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const CustomError=require('../utils/CustomError.js');
const signup=async (req,res,next) => {
    const { name, username, password }=req.body;
    try{
    let user=await User.findOne({username});
    if(user){
        next(new CustomError("User already exists",400));
    }
    user=new User({name,username,password});
    const salt=await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(password,salt);
    await user.save();
    const payload={user:{ id: user.id} };
    jwt.sign(payload, process.env.JWT_SECRET,{ expiresIn:360000}, (err,token) => {
        if(err) next( new CustomError(err.message) );
        return res.status(201).json({token});
    });
    console.log('wtf is happening');
    } catch(err){
        console.error(err.message);
        next( new CustomError('Server Error') );
    }
    
}
const login=async(req,res,next) => {
    const {username, password } =  req.body;
    try{
        let user = await User.findOne({ username });
        if(!user){
            next(new CustomError('Invalid credentials',400));
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            next(new CustomError('Invalid credentials',400));
        }
        const payload = {user : {id : user.id}};
        jwt.sign(payload, process.env.JWT_SECRET,{ expiresIn:360000}, (err,token) => {
            if(err) next( new CustomError(err.message) );
            return res.status(201).json({token});
        });
    } catch (err) {
        console.error(err.message);
        next(new CustomError('Server error'));
    }
}
module.exports={
    signup,
    login
}