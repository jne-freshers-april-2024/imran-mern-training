const express = require('express');
require('dotenv').config();
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const fileRouter = require('./routes/filesRoutes');
const multer = require('multer');


const fileFilters = (req,file,cb)=>{
       if(file.mimetype === 'image/png' 
          || file.mimetype === 'image/jpg' 
          || file.mimetype === 'image/jpeg'){
            cb(null,true);
       }else{
            cb(null,false);
       }
      
}


const diskStorge = multer.diskStorage({
      destination : (req,file,cb)=>{
          cb(null,'images');
      },
      filename:(req,file,cb)=>{
         cb(null,new Date().toISOString() + '-' + file.originalname);
      }
})
app.use(multer({storage:diskStorge,fileFilter:fileFilters}).single('image'))  

app.use(bodyParser.json());        
           
  

app.use('/file',fileRouter);




mongoose.connect(process.env.MONGOODB_URL)
.then((resolve)=>{
    app.listen(3000,()=>{
        console.log('Server is running on 3000 port....');
  })}
).catch((reject)=>{
      console.log("reject : ",reject)
})


       
   



