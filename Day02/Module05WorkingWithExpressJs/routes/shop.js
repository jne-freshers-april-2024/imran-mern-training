const express = require('express');
const path = require('path');
const routeshop = express.Router();
const rootDir = require('../util/path');
console.log("inside shop middleware");

routeshop.get('/',(req,res,next)=>{
    //console.log("inside use another middleware : ");

    //res.send('<h1>Hello From Expressjs</h1>'); // default responce type is text/html

    res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports = routeshop;