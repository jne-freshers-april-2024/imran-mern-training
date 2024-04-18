const Employee = require('../models/employeeModel');

const allData = async (req,res,next)=>{
      try {
         const data = await Employee.find();
         const dataCount = await Employee.find().countDocuments();
         res.json({
             data,
             dataCount
         })
      } catch (error) {
         console.log("error ",error);
         res.json({
            meassage : error
         })
      }
}

const addEmployee = async (req,res,next)=>{
     const emp = req.body;
     const employee = new Employee({
         name : emp.name,
         company:emp.company,
         salary:emp.salary,
         age:emp.age,
         location:emp.location
     });

    try {
        const empData = await employee.save();
        res.json({
             empData,
             message:"employee added successfully"
        })
    } catch (error) {
        res.json({
            error
        })
    }

}

const findLimitedData = async (req,res,next)=>{
    try {
        const query = {
             salary:{$gt: 23000},
             age:{$gte: 20 , $lte:25},
             company:"Thinkitive Technology"

        }
        const data = await Employee.find(query);
       
       res.json({
           data,
       })
    } catch (error) {
       console.log("error ",error);
       res.json({
          meassage : error
       })
    }
}

const agewiseData = async (req,res,next)=>{
    try {
        const query = [{
            $group :{
                _id:"$age",
                name:{
                    $push:"$name"
                }
            }

        }]
        const data = await Employee.aggregate(query);
       
       res.json({
           data,
       })
    } catch (error) {
       console.log("error ",error);
       res.json({
          meassage : error
       })
    }
}

module.exports = {
      allData,
      addEmployee,
      findLimitedData,
      agewiseData,
}