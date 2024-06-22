const jwt = require('jsonwebtoken');
const config = require('config');
const CustomError = require('../utils/CustomError.js');
module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        console.log('token not found!!');
        next(new CustomError('No token, authorization denied',401));
    }

    try {
        console.log('ayo');
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.log(err.stack);
        next(new CustomError('Token is not valid',401));
    }
};
