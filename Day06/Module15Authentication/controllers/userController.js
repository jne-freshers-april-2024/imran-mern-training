const User = require('../models/userModel');

// all users details
const allUsers = (req,res,next)=>{

     User.find().then((resolve)=>{
         res.json({
            resolve
         })
     }).catch((reject)=>{
         res.json({
            'message':"data not fetched...."
         })
     })
}

// find single user by using id
const findById =(req,res,next)=>{
    const userId = req.params.id;
     User.findById(userId)
     .then((resolve)=>{
         res.json({
            resolve
         })
     }).catch((reject)=>{
        res.json({
            "message":"User is not fetched...."
        })
     })
}

// add user
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
           res.json({
             "message":"User is not added..."
           })
    })
}


//update user 
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
         res.json({
             "message":"User Not updated.....Error",
              reject
         })
     })
}

// user Delete by id

const deleteUser = (req,res,next)=>{
     const userId = req.params.id;

     User.findByIdAndDelete(userId)
     .then((resolve)=>{
         res.json({
            "message":"user deleted successfully"
         })
     }).catch(reject=>{
             res.json({
                "message":"user not deleted...."
             })
            
     })
}

module.exports = {
      updateUser,
      deleteUser,
      addUser,
      findById,
      allUsers

}