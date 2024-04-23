const sequelize = require('./DatabseSequelize');

const manager = sequelize.define('manager',
{
    name:{
       type:DataTypes.STRING 
    },
    department:{
       type:DataTypes.STRING,
    },
});

module.exports = manager;