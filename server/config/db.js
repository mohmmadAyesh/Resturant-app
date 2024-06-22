const mongoose = require('mongoose');
require('dotenv').config();
const connectDB =  async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongo connected');
    } catch(err) {
        console.log(err);
    }
}
module.exports = connectDB;