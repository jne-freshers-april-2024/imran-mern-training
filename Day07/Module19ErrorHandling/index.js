const express = require('express');

const app = express();

const mongoose = require('mongoose');
const morgan = require('morgan');

const errorRoutes = require('./routes/errorRoutes');
const errorHandler = require('./middleware/errorHandler');

// session and cookie nees to install module cookie-parser and express-session
//const cookieParse = require('cookie-parser');
const session = require('express-session');

const employeeRoute = require('./routes/employeeRoute');
const userRouter = require('./routes/userRoute')
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded());  //  form data data encoding 
app.use(bodyParser.json());        // we can easly use json data
app.use(morgan('dev'));          
//app.use(cookieParse());   

// we can configure session like this
app.use(session({
      secret:"secreteKey",
      resave:false,
      saveUninitialized:false
}))

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/employee',employeeRoute);
//app.use('/error',errorRoutes);

//app.use(errorHandler);
//  we can pass erro into next next(error) it get call atomatically
// app.use((error,req,res,next)=>{
       
// })



mongoose.connect('mongodb+srv://imran:imran@nodejstraining.6ghesbk.mongodb.net/Appjs?retryWrites=true&w=majority&appName=NodejsTraining')
.then((resolve)=>{
   // console.log("connected successfully.......to MongoDB",resolve);
    app.listen(3000,()=>{
        console.log('Server is running on 3000 port....');
  })}
).catch((reject)=>{
      console.log("reject : ",reject)
})


// const db = mongoose.connection;

// db.on((reject)=>{
//      console.log("error ",reject);
// })

// db.once((resolve)=>{
//     console.log("connected.....",resolve);
// })



// app.listen(3000,()=>{
//      console.log("server is running on 3000");
// })

// then((resolve)=>{
//     console.log("connected successfully.......to MongoDB",resolve);
//     app.listen(3000,()=>{
//         console.log('Server is running on 3000 port....');
//   })}
// ).catch((reject)=>{
//       console.log("reject : ",reject)
// })
       
   



