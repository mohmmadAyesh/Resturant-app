const handleErrors=(err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    console.log(err.stack);
    console.log('error handled');
    res.status(statusCode).json({ success:err.success || false,message:err.message || 'Internal Server Error'});
}
module.exports=handleErrors;