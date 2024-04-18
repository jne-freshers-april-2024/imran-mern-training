const Employee = require('../models/employeeModel');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const {validationResult} = require('express-validator');
const {transporter,sendMail} = require('../sendEmails');


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
    `<form class='' action='/employee/addEmployee' method='post' novalidate>
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
     <div class=''>
     <label for='confpassword'> Conform Password </label>
      <input type='confpassword' name='confpassword' id='confpassword'></input>
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

     // validation using middleware 
     const error = validationResult(req);
     if(!error.isEmpty()){
         return res.status(422).render('/employee/addEmployee');
     }

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
        // Error handling 
        // this catch block can excute when techanical error occures not when user is not found
        // when data base connection have some problem
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
        
        // const error = new Error('all data is not present...')
        // error.httpStatusCode = 500;
        // return next(error);
    
      // temporary commented to check error handling middleware
       res.send('Protected routes');
       
    }


// Rest Password 
const resetPasswordPage =(req,res,next)=>{
    // console.log(req.get('Cookie').split('=')[1]);
     res.send(
    `<form class='' action='/employee/resetpassword' method='post'>
     <div class=''>
     <label for='email'> E-mail </label>
      <input type='email' name='email' id='email'></input>
     </div>
     <button class='btn' type='submit'>Reset</button>
  </form>`)

}

const getPasswordPage =(req,res,next)=>{
    // console.log(req.get('Cookie').split('=')[1]);
    const token = req.params.token;
    console.log("token :",token);
    Employee.findOne({resetToken:token, resetExperation:{$gt: Date.now()}}).then(employee=>{
        console.log("employee find ",employee);
        res.send(
            `<form class='' action='/employee/setpassword' method='post'>
            <div class=''>
            <label for='password'> Password </label>
             <input type='password' name='password' id='password'></input>
            </div>
            <input type="hidden" name="userId" value="${employee._id}"></input>
            <input type="hidden" name="passwordtoken" value="${token}}"></input>
             <button class='btn' type='submit'>Submit Password</button>
          </form>`)
    }).catch((error)=>{
          console.log("error",error);
    })
   

}

const resetpassword = (req,res,next)=>{
      crypto.randomBytes(32,(err,buffer)=>{
         if(err){
             res.redirect('/employee/resetpassword');
         }
         const token = buffer.toString('hex');
         console.log("token : ",token);
         Employee.findOne({email:req.body.email}).then((employee)=>{
              if(!employee){
                 res.redirect('/employee/resetpassword/page');
              }
              employee.resetToken = token,
              employee.resetExperation = Date.now() + 3600000;
              return employee.save();
         }).then((employee)=>{
            //res.redirect(`/employee/data`);
            res.send('check your email for password reset');
            const nodeMailer = {
                to:req.body.email,
                from:'imranbagwan7991@gmail.com',
                subject:'password reset',
                html:`<p>you requested to Password reset</p>
                <p>Click <a href="http://localhost:3000/employee/getpassword/${token}">link</a></p>`,
            }
             sendMail(transporter,nodeMailer);
         }).catch((err)=>{
             console.log(err);
         })
      })
}

const setPassword =(req,res,next)=>{
      const token = req.body.passwordtoken.substring(0,req.body.passwordtoken.length-1);
      const employeeId = req.body.userId;
      const newPassword = req.body.password;

      console.log(token,employeeId,newPassword);

      let resetEmployee;

      Employee.findOne({resetToken:token}).
      then(employee=>{
          
           resetEmployee = employee;
           console.log("resetEmployee :",resetEmployee);
           return bcrypt.hash(newPassword,12);
      }).then(hashPassword=>{
         resetEmployee.password = hashPassword;
         resetEmployee.resetToken = undefined;
         resetEmployee.resetExperation = undefined;
         return resetEmployee.save();
      }).then(employee=>{
         res.redirect('/employee/login');
      }).catch((error)=>{
         console.log("error : ",error);
      })
}



module.exports ={
     employeeRegisterPage,
     addEmployee,
     employeeloginPage,
     validateEmployee,
     allData,
     resetPasswordPage,
     resetpassword,
     getPasswordPage,
     setPassword

}