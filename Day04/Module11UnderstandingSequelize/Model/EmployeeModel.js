const sequelize = require('./DatabseSequelize');
const Manager = require('./managerModel');
const Employee = sequelize.define('employee',
{
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

Employee.belongsTo(Manager, {
    constraints: true,
    onDelete: 'CASCADE'
  });

Manager.hasMany(Employee);

module.exports = Employee;