const express = require('express');
const employeeController = require('../controllers/employeeController');
const routes = express.Router();
const {check,body} = require('express-validator');
const isAuth = require('../middleware/authProtection');

routes.get('/register',employeeController.employeeRegisterPage);
// withMessage("Please Enter valid email")
routes.post('/addEmployee',
[check('email').isEmail().custom((value,{req})=>{
    if(value === 'imran@gmail.com')
           throw new Error('This email is forbbidean');
    return true;
}),
 body('password').isLength({min:6}).isAlphanumeric(),
 body('confpassword').custom((value,err)=>{
     if(value !== req.body.password){
         throw new Error('password is not conformed..')
     }
     return true;
 })],
 employeeController.addEmployee);

routes.get('/login',employeeController.employeeloginPage);
routes.post('/validateEmployee',employeeController.validateEmployee);

routes.get('/data',isAuth, employeeController.allData);


routes.get('/resetpassword/page',employeeController.resetPasswordPage);
routes.post('/resetpassword',employeeController.resetpassword);

routes.get('/getpassword/:token',employeeController.getPasswordPage);
routes.post('/setpassword',employeeController.setPassword);
module.exports = routes;