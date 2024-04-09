const http = require('http');
const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded());// pasrse incoming request and gives us


// app.use('/',(req,res,next)=>{
//     console.log("inside the middleware to pass to next middleware");
//     next();
// })

app.use('/shop',shopRoutes);

app.use('/admin',adminRoutes);



// TO handle the error in request

app.use((req,res,next)=>{
     res.status(403).sendFile(path.join(__dirname,'views','404.html'));
})


// const PORT = 3000;
// const server = http.createServer(app);
// server.listen(PORT,()=>{
//      console.log(`server started on port ${3000}`);
// });
// express listen method is the abstration f above code


app.listen(3000,()=>{
     console.log('express is listeaning on 3000');
});