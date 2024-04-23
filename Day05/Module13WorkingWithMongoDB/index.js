const express = require('express');

const app = express();

const mongoose = require('mongoose');

const morgan = require('morgan');
const userRouter = require('./routes/userRoute')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/user',userRouter);






mongoose.connect('mongodb+srv://imran:imran@nodejstraining.6ghesbk.mongodb.net/Appjs?retryWrites=true&w=majority&appName=NodejsTraining')
.then((resolve)=>{
    console.log("connected successfully.......to MongoDB",resolve);
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
       
   



