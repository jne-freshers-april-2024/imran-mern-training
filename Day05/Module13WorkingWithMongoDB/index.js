const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const CustomError = require('./utils/CustomError');


const userRouter = require('./routes/userRoute')
const bodyParser = require('body-parser');


app.use(bodyParser.json());


app.use('/api/user',userRouter);




app.use(CustomError);

mongoose.connect(process.env.MONGOODB_URL)
.then((resolve)=>{
    app.listen(3000,()=>{
        console.log('Server is running on 3000 port....');
  })}
).catch((reject)=>{
     const err = new CustomError('Database connection failed ',500);
     next(err);
})



       
   



