
const express = require('express');

const routes = express.Router();

const path = require('path');
const rootDir = require('../util/path');

routes.get('/add-products',(req,res,next)=>{
    // console.log("inside use middleware : ");
     //res.send("<h1>this is the add-product api</h1>");
    // next(); // it allows to go to next middleware in line

    res.sendFile(path.join(rootDir,'views','addProduct.html'));
})

routes.post('/add-product',(req,res,next)=>{         // we can use specific request
     console.log("request body :",req.body);
     res.redirect('/shop');
})


module.exports = routes;