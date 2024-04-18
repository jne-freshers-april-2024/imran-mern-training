const express = require('express');

const app = express();

const mongoose = require('mongoose');
const morgan = require('morgan');


const bodyParser = require('body-parser');
const fileRouter = require('./routes/filesRoutes');
const multer = require('multer');

app.use(bodyParser.urlencoded());  //  form data data encoding 


//File filters
const fileFilters = (req,file,cb)=>{
       if(file.mimetype === 'image/png' 
          || file.mimetype === 'image/jpg' 
          || file.mimetype === 'image/jpeg'){
            cb(null,true);
           console.log("inside filefilter....")
       }else{
            cb(null,false);
       }
      
}

// file storege configaration path and name of file etc
const diskStorge = multer.diskStorage({
      destination : (req,file,cb)=>{
          cb(null,'images');
      },
      filename:(req,file,cb)=>{
         cb(null,new Date().toISOString() + '-' + file.originalname);
      }
})
app.use(multer({storage:diskStorge,fileFilter:fileFilters}).single('image'))  // to handle the single file request name is image

app.use(bodyParser.json());        // we can easly use json data
app.use(morgan('dev'));            // use that middleware to logging purpose
//app.use(cookieParse());   




app.use('/file',fileRouter);




mongoose.connect('mongodb+srv://imran:imran@nodejstraining.6ghesbk.mongodb.net/Appjs?retryWrites=true&w=majority&appName=NodejsTraining')
.then((resolve)=>{
   // console.log("connected successfully.......to MongoDB",resolve);
    app.listen(3000,()=>{
        console.log('Server is running on 3000 port....');
  })}
).catch((reject)=>{
      console.log("reject : ",reject)
})


       
   



