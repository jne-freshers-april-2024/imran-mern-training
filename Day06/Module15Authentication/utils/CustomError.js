
class CustomError extends Error{
     
    constructor(message,statusCode){
          super(message);
          this.statusCode = statusCode;
          this.status = this.statusCode >=400 && this.statusCode <500 ? 'Failed' : 'Error' 
          this.isOperational = true;

          Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = CustomError;