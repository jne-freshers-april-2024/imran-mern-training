const Employee = require('../models/employeeModel');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const {transporter,sendMail} = require('../sendEmails');
const CustomeError = require('../utils/CustomError');

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
                   const err = new CustomeError('User is not added',500);
                   next(err);
            })
        }); 
          
        }
    }).catch((err)=>{
        const err = new CustomeError('User is not added',500);
        next(err);
    })
   
}

const validateEmployee = (req,res,next)=>{
     const employee = req.body;
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

const resetPasswordPage =(req,res,next)=>{
  
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
    
    const token = req.params.token;
    Employee.findOne({resetToken:token, resetExperation:{$gt: Date.now()}}).then(employee=>{
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
        const err = new CustomeError('User is not found',500);
        next(err);
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
      let resetEmployee;

      Employee.findOne({resetToken:token}).
      then(employee=>{
          resetEmployee = employee;
           return bcrypt.hash(newPassword,12);
      }).then(hashPassword=>{
         resetEmployee.password = hashPassword;
         resetEmployee.resetToken = undefined;
         resetEmployee.resetExperation = undefined;
         return resetEmployee.save();
      }).then(employee=>{
         res.redirect('/employee/login');
      }).catch((error)=>{
        const err = new CustomeError('Error in password reset',500);
        next(err);
      })
}



module.exports ={
     employeeRegisterPage,
     addEmployee,
     employeeloginPage,
     validateEmployee,
     resetPasswordPage,
     resetpassword,
     getPasswordPage,
     setPassword

}