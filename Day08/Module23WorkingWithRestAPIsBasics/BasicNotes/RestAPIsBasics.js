// REST APIs 

// template ejs - one methos we can develope our application 
             // - only work with HTML pages for frontend
// Other is using Rest API's

// representational state transfer - REST 
// we can transer data instead of user Interface 

// json javascript object notation

// Routing -  client -- server

// put---  method is used to update
// or replace an existing resource or create a new resource if it doesn't exist.

// Patch --  method is used to apply partial modifications to an existing resource.


// application from initial stage
// express
// nodemon -- start nodemon index.js
// body-parser

// res.status(200).json({})


// CORS - Cross-origin-Resource-Sharing

// cors -- error   browser machanisum two different domain not contact/ address
// we need to tell browser may accept 
// server something change 
// set special header 
// response leaves server
// cors we need to write below code

/*
   app.use((req,res,next)=>{
      res.setHeader("Access-Control-Allow-Origin","*");
      res.setHeader("Access-Control-Allow-Methods","GET,POST,DELETE,PUT");
      res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization");
      res.setHeader("Access-Control-Allow-Origin","*");
   })
*/



