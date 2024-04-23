const express = require('express');
require('dotenv').config();
const app = express();

const mongoose = require('mongoose');



const session = require('express-session');

const employeeRoute = require('./routes/employeeRoute');
const userRouter = require('./routes/userRoute')
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');


app.use(bodyParser.json());       
          

app.use(session({
      secret:process.env.SECRETE_Key,
      resave:false,
      saveUninitialized:false
}))

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/employee',employeeRoute);






mongoose.connect(process.env.MONGOODB_URL)
.then((resolve)=>{
   
    app.listen(3000,()=>{
        console.log('Server is running on 3000 port....');
  })}
).catch((reject)=>{
      console.log("reject : ",reject)
})


       
   



