const Employee = require('../models/employeeModel');


exports.getAllEmployeeData = async (req,res,next)=>{
       
      try {
            const allEmployees = await Employee.find();
            res.json(allEmployees);
      } catch (error) {
            console.log(error);
            res.status(500).json({ message :'Enternal server error'}) ;
      }
}





