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
      const imagefile = req.file ;  // get the buffer data stream data collected data
      const empId = req.params.empId;
      console.log("imageFile ",imagefile," empId ",empId);

      Employee.findById(empId).then((employee)=>{
           console.log("Employee :: ",employee);
           employee.empImage = imagefile.path;
           employee.save();
           return res.send(employee);
      }).catch((error)=>{
          console.log(error);
      })
      // res.send('file data is get in fileUploader api');
}

const downloadFile = (req,res,next)=>{
   const empId = req.params.id;

   Employee.findById(empId).then((employee)=>{
        const imagePath = employee.empImage;
        console.log("image path ",imagePath);
      //   fs.readFile(imagePath ,(err,data)=>{
      //     if(err){
      //         return next(err);
      //     }
      //     res.send(data);
      //   })

     const file = fs.createReadStream(imagePath);
     res.setHeader("Content-Type","application/jpeg")
     file.pipe(res);
        
   })
}

const deleteFile =(req,res,next)=>{
       const empId = req.params.id;
       Employee.findById(empId).then((employee)=>{
         const imagePath = employee.empImage;
         console.log("image path ",imagePath);
         
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