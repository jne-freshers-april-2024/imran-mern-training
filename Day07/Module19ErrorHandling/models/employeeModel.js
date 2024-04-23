const mongoose = require('mongoose');

const schema = mongoose.Schema;

const employeeSchema = new schema({
    name:{
        type:String,
        require:true
    },
    company:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    resetToken:{
         type:String
    },
    resetExperation:{
        type:Date
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true});


module.exports = mongoose.model('Employee',employeeSchema);