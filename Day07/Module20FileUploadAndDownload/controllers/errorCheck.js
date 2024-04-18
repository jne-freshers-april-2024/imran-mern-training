
const notFoundError = (req,res,next)=>{
       
     if(2===2){
         res.status(404);
         new Error('user is not found');
     }
}

module.exports ={
     notFoundError,
}