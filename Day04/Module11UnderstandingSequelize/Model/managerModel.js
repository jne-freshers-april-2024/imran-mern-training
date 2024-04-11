const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('./DatabseSequelize');

const manager = sequelize.define('manager',
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
    department:{
       type:DataTypes.STRING,
    },
});

module.exports = manager;