const express = require('express');
const employeeController = require('../controllers/employeeController');
const routes = express.Router();

const isAuth = require('../middleware/authProtection');

routes.get('/register',employeeController.employeeRegisterPage);
routes.post('/addEmployee',employeeController.addEmployee);

routes.get('/login',employeeController.employeeloginPage);
routes.post('/validateEmployee',employeeController.validateEmployee);
routes.get('/data',isAuth, employeeController.allData);
module.exports = routes;