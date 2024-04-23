const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('./DatabseSequelize');

const Employee = sequelize.define('employee',
{
//    id: {
//      type:DataTypes.INTEGER,
//      autoIncreament : true,
//      //allowNull : false,
//      primaryKey : true
//     },
    name:{
       type:DataTypes.STRING 
    },
    company:{
       type:DataTypes.STRING,
    },
    location:{
        type:DataTypes.STRING
    }
});

module.exports = Employee;