
const salaryValidate = (req,res,next)=>{
      if(req.body && req.body.salary && req.body.salary < 25000){
           req.body.salary = 25000;
      }
      next();
}

module.exports = salaryValidate;