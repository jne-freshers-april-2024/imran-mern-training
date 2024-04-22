const express = require('express');
require('dotenv').config()
const app = express();
const CustomeError = require('./utils/CustomError')
const mongoose = require('mongoose');
const session = require('express-session');

const employeeRoute = require('./routes/employeeRoute');

const bodyParser = require('body-parser');
app.use(bodyParser.json());        


app.use(session({
      secret:process.env.SECRETE_Key,
      resave:false,
      saveUninitialized:false
}))


app.use('/employee',employeeRoute);

app.use(CustomeError);




mongoose.connect(process.env.MONGOODB_URL)
.then((resolve)=>{
  
    app.listen(3000,()=>{
        console.log('Server is running on 3000 port....');
  })}
).catch((reject)=>{
      const err = new CustomeError('Database Connection failed',500);
      next(err); 
})


       
   



