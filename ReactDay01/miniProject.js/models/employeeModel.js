const mongoose = require('mongoose');

const schema = mongoose.Schema;

const employeeSchema = new schema({
     name:{
         type:String,
     },
     salary:{
        type:Number,
     },
     company:{
        type:String,
     },
     location:{
        type:String,
     },
     age:{
        type:Number,
     },

})


module.exports = mongoose.model('Employee',employeeSchema);