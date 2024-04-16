const Employee = require('../models/employeeModel');
const bcrypt = require('bcryptjs');

// const nodemailer = require('nodemailer');
// const sendGridTransport = require('nodemailer-sendgrid-transport');
// const transport = nodemailer.createTransport(sendGridTransport({
//     auth:{
//         api_user: "",
//         api_key:''
//         // settings - api keys
//     }
// }));

const employeeRegisterPage =(req,res,next)=>{
    // console.log(req.get('Cookie').split('=')[1]);
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


const employeeloginPage =(req,res,next)=>{
    // console.log(req.get('Cookie').split('=')[1]);
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
        //console.log("employeeData ",employeeData)
        if(employeeData){
            res.redirect('/employee/register');
        }else{
            // 12 denotes no of level it can be hashed return promise
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
                   res.json({
                     "message":"User is not added..."
                   })
            })
        }); 
          
        }
    }).catch((err)=>{
          res.send('error in finding employee')
    })
   
}

const validateEmployee = (req,res,next)=>{
     const employee = req.body;
     console.log(employee);
     Employee.findOne({email:employee.email})
     .then((e)=>{
              if(!e){
                console.log("e",e);
                return res.redirect('/employee/login')
              }
              bcrypt.compare(employee.password,e.password).then((match)=>{
                     if(match){
                        console.log("password mathches....")
                         req.session.isLoggedIn = true;
                         req.session.employee = e;
                         return req.session.save(err=>{
                            console.log(err);
                            // transport.sendMail({
                            //     to:employee.email,
                            //     from:"imranbagwan86986@gmail.com",
                            //     subject:"successfully singed up",
                            //     html: `<h1>you singup successfully</h1>`
                            // })
                            res.send('employee login successfully');
                         })
                     }
                         res.redirect('/employee/login');
                     
              }).catch((err)=>{
                console.log("inside catch 9....");
                return res.redirect('/employee/login');
              })
     }).catch((error)=>{
        console.log('inside catch...10');
         res.redirect('/employee/login');
     })
}

const allData = (req,res,next)=>{
    //  if(req.session.isLoggedIn)
    //     res.send('Protected routes');
    //  else{
    //     console.log('used is not logged in');
    //     res.redirect('/employee/login')
    //  }

        res.send('Protected routes');
       
    }

module.exports ={
     employeeRegisterPage,
     addEmployee,
     employeeloginPage,
     validateEmployee,
     allData

}