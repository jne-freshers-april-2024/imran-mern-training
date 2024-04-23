const Sequelize = require('sequelize');
                 // database name, username, password, {dialect(sql),hostname}
const sequelize = new Sequelize('day03','root','root',{dialect:'mysql',host:'localhost'});

console.log('inside databses connnection');


module.exports = sequelize;