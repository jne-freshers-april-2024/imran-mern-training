const express = require('express');



const routes = express.Router();


routes.get('/:id',(req,res,next)=>{
     const id = req.params.id;
     res.send(`<h1>params data ${id} : Dynamic routes</h1>`);
})

routes.get('/query/:id',(req,res,next)=>{
    const id = req.params.id;
    res.send(`<h1>params data ${id} : and query parameter ${req.query.name}  Dynamic routes</h1>`);
})

routes.post('/:id',(req,res,next)=>{
    const ids = req.params.id;
      res.redirect('/:ids');
})





module.exports = routes;