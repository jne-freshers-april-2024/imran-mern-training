const express = require('express');
const app = express();

const employeeRoutes = require('./routes/employeeRoutes')

const sequelise = require('./Model/DatabseSequelize');

const Employee = require('./Model/EmployeeModel');
const manager = require('./Model/managerModel');

const bodyparse = require('body-parser');

app.use(bodyparse.urlencoded({extended:true}));

// to convert body data into json
app.use(bodyparse.json());

//app.get('/employee/form',employeeRoutes);

app.get('/',(req,res,next)=>{
     res.send(`<h1>please use correct URL</h1>`);
});

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







// Inserting data in table using sequelize 
// alway use promises 
app.get('/employee/show',(req,res,next)=>{
     Employee.findAll().then((resolve)=>{
        console.log('get all the data')
        for(const employee of resolve){
             console.log(employee);
        }
        res.send('<h2>We have get all the details<h2/>')
     }).catch((reject)=>{
           console.log("have some",reject);
     })
})

app.get('/employee/show/:id',(req,res,next)=>{
     const employeeid = req.params.id;

     Employee.findAll({where :{id:employeeid}}).then((resolve)=>{
           console.log(`single data finded by ${employeeid}`,resolve);
           const {id,name,company,location} = resolve[0];
           console.log("resolve",resolve[0].id,resolve[0].name,resolve[0].company,resolve[0].location);
           res.send(`<h1>Employee Details</h1><h3>employeeid : ${resolve[0].id}</h3>
           <h3>employeename : ${resolve[0].name}</h3>
           <h3>employeecompany : ${resolve[0].company}</h3>
           <h3>employeelocation : ${resolve[0].location}</h3>`)
     }).catch((reject)=>{
          console.log(reject);
     })
})



app.put('/employee/update/:id',(req,res,next)=>{
      const employeeid = req.params.id;
      const employee = req.body;
       console.log("employee : ",employee);
       console.log("req.body: ",req.body);
      Employee.findAll({where :{id:employeeid}}).then((resolve)=>{
        console.log(`single data finded by ${employeeid}`,resolve);
        const {id,name,company,location} = resolve[0];
        console.log("resolve",resolve[0].id,resolve[0].name,resolve[0].company,resolve[0].location);

        resolve[0].name = req.body.name;
        resolve[0].company = req.body.company;
        resolve[0].location= req.body.location;

        return resolve[0].save();
      }).then(result=>{
          console.log("result ",result.name,result.company,result.location);
          res.send(`<h1>Product updated Successflly</h1>`);
      }).catch((reject)=>{
       console.log(reject);
      })

})

app.delete('/employee/delete/:id',(req,res,next)=>{
     const deleteId = req.params.id;
     Employee.destroy({where:{id:deleteId}});
     console.log("user deleted successfully");
     res.send(`<h1>user deleted successfully</h1>`);
})

app.post('/employee/add',(req,res,next)=>{
  console.log("inside post insert meathod");
  const {name,company,location} = req.body;
   Employee.create({
        name:name,
        company:company,
        location:location
   }).then((resolve)=>{
        console.log("resolve",resolve);
        res.send('<h1>Data added Successflly');
   }).catch((reject)=>{
        console.log(reject)
   })
   
})

// 
app.post('/manger/employee',(req,res,next)=>{
     manager.create({name:"manager",department:"IT"}).then((resolve)=>{
             const employee = req.body;
             return resolve.createEmployee({name:employee.name,company:employee.company,location:employee.location
                            ,managerId:resolve.id});
     }).then((employee)=>{
          console.log("employee ",employee);
          res.status(200).send(`<h2>Data Updated successfully</h2>`);
     }).catch((reject)=>{
         console.log("rejected ",reject);
     })
})




Employee.belongsTo(manager, {
    constraints: true,
    onDelete: 'CASCADE'
  });

  manager.hasMany(Employee);





// sequelize sync methode excute/create all the tables at single time
// worked on based ORM model
// facing issue regaring of sequelize sync method {force:false}
sequelise.sync().then((resolve)=>{
     console.log("Inside then-- resolve ");
     console.log(resolve);
     app.listen(3000,()=>{
         console.log('server is listening on prot no 3000');
     })
}).catch((reject)=>{
     console.log('inside catch block');
}).finally(()=>{
    console.log('inside finally block');
})

