const express = require('express');

const app = express();

const mongoose = require('mongoose');
const errorRoutes = require('./routes/errorRoutes');
const errorHandler = require('./middleware/errorHandler');


const bodyParser = require('body-parser');




app.use(bodyParser.json());      

app.use('/error',errorRoutes)
app.use(errorHandler);



 app.listen(3000,()=>{
        console.log('Server is running on 3000 port....')});
 


       
   



