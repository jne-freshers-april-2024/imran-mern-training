const express = require('express');
const CustomeError = require('./utils/CustomError');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');


const session = require('express-session');

const userRouter = require('./routes/userRoute')
const authRouter = require('./routes/authRoute');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());  
app.use(bodyParser.json());   
app.use(morgan('dev'));          


app.use(session({
      secret:process.env.SECRITE_Key,
      resave:false,
      saveUninitialized:false
}))

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);


app.use(CustomeError);





mongoose.connect(process.env.MONGOODB_URL)
.then((resolve)=>{
    app.listen(3000,()=>{
        console.log('Server is running on 3000 port....');
  })}
).catch((reject)=>{
      const err = new CustomeError("Database connection failed",500);
      next(err);
})



   



