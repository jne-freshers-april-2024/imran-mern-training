const Employee = require('../models/employeeModel');



const getEmployeeData = (req,res,next)=>{
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 2;
      console.log("page : ",page," limit ",limit);
      console.log(typeof page);
      let totalDataCount;
      const skip = (page-1)*limit;
       
      Employee.find()
      .countDocuments().then((dataCount)=>{
           totalDataCount = dataCount;
           return Employee.find().skip(skip).limit(limit);
      }).then((employeeData)=>{
            res.json({
                  employeeData,
                  totalDataCount
            })
      }).catch((error)=>{
             console.log("error : ",error);
      })
}



module.exports = {
      getEmployeeData
}


