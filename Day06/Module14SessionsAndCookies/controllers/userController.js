const User = require('../models/userModel');
const CustomeError  = require('../utils/CustomError');

const allUsers = (req,res,next)=>{
     User.find().then((resolve)=>{
         res.json({
            resolve
         })
     }).catch((reject)=>{
         const err = new CustomeError("UserData is not found ",404);
         next(err);
     })
}


const findById =(req,res,next)=>{
    const userId = req.params.id;
     User.findById(userId)
     .then((resolve)=>{
         res.json({
            resolve
         })
     }).catch((reject)=>{
        const err = new CustomeError("User is not found ",404);
        next(err);
     })
}


const addUser = (req,res,next)=>{
    const u = req.body;
    const user = new User({
        name : u.name,
        address:u.address,
        password:u.password
    });

    user.save()
    .then((resolve)=>{
        res.json({
            resolve
        })
    }).catch((reject)=>{
        const err = new CustomeError("User not inserted in database",500);
        next(err);
    })
}



const updateUser = (req,res,next)=>{
     const userId = req.params.id;
     const newUser = req.body;
     console.log("new user",newUser);
     const user = {
          name :newUser.name,
          address : newUser.address,
          password: newUser.password
     };

     User.findByIdAndUpdate(userId,{$set:user})
     .then((resolve)=>{
         res.json({
             "message":"User added successfully",
             resolve

         })
     }).catch((reject)=>{
        const err = new CustomeError("User is not updated ",500);
        next(err);
     })
}


const deleteUser = (req,res,next)=>{
     const userId = req.params.id;

     User.findByIdAndDelete(userId)
     .then((resolve)=>{
         res.json({
            "message":"user deleted successfully"
         })
     }).catch(reject=>{
        const err = new CustomeError("User is not deleted",500);
        next(err);
            
     })
}

module.exports = {
      updateUser,
      deleteUser,
      addUser,
      findById,
      allUsers

}