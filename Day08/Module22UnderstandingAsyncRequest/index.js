const express = require('express');
const app = express();

const mongoose = require('mongoose');
const morgan = require('morgan');



const employeeRoute = require('./routes/employeeRoute');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded());  //  form data data encoding 
app.use(bodyParser.json());        // we can easly use json data
app.use(morgan('dev'));          
//app.use(cookieParse());   




app.use('/employee',employeeRoute);






mongoose.connect('mongodb+srv://imran:imran@nodejstraining.6ghesbk.mongodb.net/Appjs?retryWrites=true&w=majority&appName=NodejsTraining')
.then((resolve)=>{
   // console.log("connected successfully.......to MongoDB",resolve);
    app.listen(3000,()=>{
        console.log('Server is running on 3000 port....');
  })}
).catch((reject)=>{
      console.log("reject : ",reject)
})

       
   



