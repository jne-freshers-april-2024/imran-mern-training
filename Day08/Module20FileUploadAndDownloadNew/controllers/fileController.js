const Employee = require('../models/employeeModel');
const fs = require('fs');

const filePickerForm = (req,res,next)=>{
     const empId = req.params.id
     res.send(
        `<form class='' action='/file/uploadimage/${empId}' method='post' enctype='multipart/form-data'>
     <div class=''>
     <label for='image'> Employee Image </label>
      <input type='file' name='image' id='image'></input>
     </div>
     <button class='btn' type='submit'>Upload Image</button>
  </form>`
     )
}

const fileUploader = (req,res,next)=>{
      const imagefile = req.file ;  
      const empId = req.params.empId;
      Employee.findById(empId).then((employee)=>{
           employee.empImage = imagefile.path;
           employee.save();
           return res.send(employee);
      }).catch((error)=>{
          res.status(404).json({
               message:"User is not found"
          })
      })
     
}

const downloadFile = (req,res,next)=>{
   const empId = req.params.id;

   Employee.findById(empId).then((employee)=>{
     const imagePath = employee.empImage;
     const file = fs.createReadStream(imagePath);
     res.setHeader("Content-Type","application/jpeg")
     file.pipe(res);
        
   })
}

const deleteFile =(req,res,next)=>{
       const empId = req.params.id;
       Employee.findById(empId).then((employee)=>{
         const imagePath = employee.empImage;
         fs.unlink(imagePath ,(err)=>{
             if(err){
                 throw new Error('file is not deleted');
             }
             employee.empImage = undefined;
             employee.save();
         });

         
    })
};

module.exports ={
     filePickerForm,
     fileUploader,
     downloadFile,
     deleteFile
}