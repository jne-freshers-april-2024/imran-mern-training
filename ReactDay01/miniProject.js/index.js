const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
require('dotenv').config();
const employeeRoutes = require('./routes/employeeRutes');
const app = express();
//const dataMiddleware = require('./middleware/emplyeeData');


app.use(bodyParse.json());

//app.use(dataMiddleware);
app.use('/employee',employeeRoutes);







const port = process.env.PORT;
const url = process.env.MONGODBCONNECT;

mongoose.connect(url).then((connect)=>{
    app.listen(port,()=>{
         console.log(`express is running on post ${port}`);
    })
}).catch((error)=>{
       console.log("error in connection ",error);
})

