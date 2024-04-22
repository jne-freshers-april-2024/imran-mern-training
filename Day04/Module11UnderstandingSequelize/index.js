const express = require('express');
const app = express();
const CustomError  = require('./utils/CustomError');

const sequelise = require('./Model/DatabseSequelize');
const Employee = require('./Model/EmployeeModel');
const manager = require('./Model/managerModel');

const bodyparse = require('body-parser');
app.use(bodyparse.urlencoded({extended:true}));

app.use(bodyparse.json());

app.get('/add',(req,res,next)=>{
     res.send(`<h2>Submit Form</h2>

     <form action="/employee/add" method="post">
     <label for="name">Name:</label><br>
     <input type="text" id="name" name="name"><br>
     
     <label for="company">Company:</label><br>
     <input type="text" id="company" name="company"><br>
     
     <label for="location">Location:</label><br>
     <input type="text" id="location" name="location"><br><br>
     
     <input type="submit" value="Submit">
   </form>`)
});


app.get('/update',(req,res,next)=>{
    res.send(`<h2>Submit Form</h2>

    <form action="/employee/update" method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>
    
    <label for="company">Company:</label><br>
    <input type="text" id="company" name="company"><br>
    
    <label for="location">Location:</label><br>
    <input type="text" id="location" name="location"><br><br>
    
    <input type="submit" value="Submit">
  </form>`)
})


app.get('/employee/show',(req,res,next)=>{
     Employee.findAll().then((resolve)=>{
        res.status(200).json({
           resolve
        })
     }).catch((reject)=>{
           const err = new CustomError("Employee data is not found ",404);
           next(err);
     })
})

app.get('/employee/show/:id',(req,res,next)=>{
     const employeeid = req.params.id;

     Employee.findOne({employeeid}).then((resolve)=>{
           res.status(200).json({resolve})
     }).catch((reject)=>{
          const err = new CustomError("Employee data is not found ",404);
          next(err);
     })
})



app.put('/employee/update/:id',(req,res,next)=>{
      const employeeid = req.params.id;
      const employee = req.body;
      
      Employee.findOne({employeeid}).then((resolve)=>{
        
        resolve.name = employee.name;
        resolve.company = employee.company;
        resolve.location= employee.location;

        return resolve.save();
      }).then(result=>{
         res.status(200).json({result});
      }).catch((reject)=>{
         const err = new CustomError("Employee is not found",404);
         next(err);
      })

})

app.delete('/employee/delete/:id',(req,res,next)=>{
     const deleteId = req.params.id;
     Employee.destroy({where:{id:deleteId}});
     res.status(200).json({messege:"Employee Deleted Successfully"});
})

app.post('/employee/add',(req,res,next)=>{
  console.log("inside post insert meathod");
  const {name,company,location} = req.body;
   Employee.create({
        name:name,
        company:company,
        location:location
   }).then((resolve)=>{
        res.status(201).json({resolve});
   }).catch((reject)=>{
     const err = new CustomError("Database conection failed ",500);
     next(err);
   })
   
})


app.post('/manger/employee',(req,res,next)=>{
     manager.create({name:"manager",department:"IT"}).then((resolve)=>{
             const employee = req.body;
             return resolve.createEmployee({name:employee.name,company:employee.company,location:employee.location
                            ,managerId:resolve.id});
     }).then((employee)=>{
          res.status(201).json({employee});
     }).catch((reject)=>{
          const err = new CustomError("Database conection failed ",500);
          next(err);
     })
})


app.use(CustomError);



sequelise.sync().then((resolve)=>{
     app.listen(3000,()=>{
         console.log('server is listening on prot no 3000');
     })
}).catch((reject)=>{
     const err = new CustomError("Database conection failed ",500);
     next(err);
}).finally(()=>{
    console.log('inside finally block');
})

