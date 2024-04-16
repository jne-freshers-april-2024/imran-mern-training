

const errorHandler = (err,req,res,next)=>{
      
    const statusCode  = res.statusCode?res.statusCode:500;
    console.log(statusCode)
    switch(statusCode){
         case 500:
            res.json({
               title:"Internal server error",
               message:err.message,
               stackTrace:err.stackTrace
            });
         break;
         case 401:
            res.json({
               title:"UnAuthorised",
               message:err.message,
               stackTrace:err.stackTrace
            });
         break;
         case 404:
            res.json({
               title:"Not Found",
               message:err.message,
               stackTrace:err.stackTrace
            });
         break;
         case 403:
            res.json({
               title:"Forbidden",
               message:err.message,
               stackTrace:err.stackTrace
            });
         break;
         case 422:
            res.json({
               title:"Validation error",
               message:err.message,
               stackTrace:err.stackTrace
            });
         break;
         default:
            console.log("All ok !!!!");
         break;
    }
}


module.exports = errorHandler;