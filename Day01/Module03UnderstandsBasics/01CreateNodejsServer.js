// http  https path fs path os 

// http =>> launch server and send request
// https =>> launch ssl server

const http = require('http');

const server = http.createServer((req,res)=>{
     console.log("resquest : ",res);
})

server.listen(3000);