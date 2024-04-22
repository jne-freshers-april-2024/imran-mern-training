const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');


const employeeRoute = require('./routes/employeeRoute');
const bodyParser = require('body-parser');

app.use(bodyParser.json());    
 
app.use('/employee',employeeRoute);

mongoose.connect(process.env.MONGOODB_URL)
.then((resolve)=>{
    app.listen(3000,()=>{
        console.log('Server is running on 3000 port....');
  })}
).catch((reject)=>{
      console.log("reject : ",reject)
})

       
   



