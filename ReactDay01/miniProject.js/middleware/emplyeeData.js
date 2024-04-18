
const data = (req,res,next)=>{
     if(req.body.name && req.body.name !== req.body.name.toUpperCase()){
        let empName = req.body.name;

        req.body.name = empName.toUpperCase();
        
        // return res.json({
        //      message:`Enter name in uppercase ${req.body.name}`
        // })
     }
     
      next();
}

module.exports = data;