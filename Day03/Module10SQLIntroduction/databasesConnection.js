// do not connect with single connnection
// always create connection pool

const mysql = require('mysql2');

const pool = mysql.createPool({
     host:"localhost",
     user:"root",
     password:"root",
     database:"day03"
})

module.exports = pool.promise();