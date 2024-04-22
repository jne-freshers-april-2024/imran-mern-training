const express = require('express');
const employeeController = require('../controllers/employeeController');
const routes = express.Router();


routes.get('/data',employeeController.getEmployeeData);

module.exports = routes;