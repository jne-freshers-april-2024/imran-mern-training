require('dotenv').config()

const Sequelize = require('sequelize');
                
const sequelize = new Sequelize(process.env.DATABASENAME,process.env.USERNAME,process.env.PASSWORD,{dialect:process.env.DILECT,host:process.env.LOCALHOST});

module.exports = sequelize;