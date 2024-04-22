const Employee = require('../models/employeeModel');
const bcrypt = require('bcryptjs');
const CustomeError = require('../utils/CustomError')

const employeeRegisterPage =(req,res,next)=>{
     res.send(
    `<form class='' action='/employee/addEmployee' method='post'>
     <div class=''>
      <label for='name'>userName</label>
      <input type='text'name='name'id='name'></input>
     </div>
     <div class=''>
     <label for='company'> Company </label>
      <input type='text' name='company' id='company'></input>
     </div>
     <div class=''>
     <label for='email'> E-mail </label>
      <input type='email' name='email' id='email'></input>
     </div>
     <div class=''>
     <label for='password'> Password </label>
      <input type='password' name='password' id='password'></input>
     </div>
     <button class='btn' type='submit'>Login</button>
  </form>`)

}

res.json({
    'message':"data not fetched...."
 })
const employeeloginPage =(req,res,next)=>{
     res.send(
    `<form class='' action='/employee/validateEmployee' method='post'>
     <div class=''>
     <label for='email'> E-mail </label>
      <input type='email' name='email' id='email'></input>
     </div>
     <div class=''>
    <label for='password'> Password </label>
      <input type='password' name='password' id='password'></input>
     </div>
     <button class='btn' type='submit'>Login</button>
  </form>`)

}

const addEmployee = (req,res,next)=>{
    const u = req.body;
    console.log(u);

    Employee.findOne({email:u.email})
    .then((employeeData)=>{
        if(employeeData){
            res.redirect('/employee/register');
        }else{
         return   bcrypt.hash(u.password,12)
         .then((hashPassword)=>{
            const employee = new Employee({
                name : u.name,
                company:u.company,
                email:u.email,
                password:hashPassword
            });
        
            employee.save()
            .then((resolve)=>{
                res.redirect('/employee/login');
            }).catch((reject)=>{
                const err = new CustomeError("User not added in database",500);
                next(err);
            })
        }); 
          
        }
    }).catch((err)=>{
        const err = new CustomeError("User is ot found in database",500);
        next(err);
    })
   
}

const validateEmployee = (req,res,next)=>{
     const employee = req.body;
     console.log(employee);
     Employee.findOne({email:employee.email})
     .then((e)=>{
              if(!e){
                return res.redirect('/employee/login')
              }
              bcrypt.compare(employee.password,e.password).then((match)=>{
                     if(match){
                         req.session.isLoggedIn = true;
                         req.session.employee = e;
                         return req.session.save(err=>{
                            console.log(err);
                            res.send('employee login successfully');
                         })
                     }
                         res.redirect('/employee/login');
                     
              }).catch((err)=>{
                return res.redirect('/employee/login');
              })
     }).catch((error)=>{
       
         res.redirect('/employee/login');
     })
}

const allData = (req,res,next)=>{
      res.send('Protected routes');
     }

module.exports ={
     employeeRegisterPage,
     addEmployee,
     employeeloginPage,
     validateEmployee,
     allData

}