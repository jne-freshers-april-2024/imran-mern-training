
const express = require('express');

const {getFormForAddEmployee} = require('../Controllers/employeeController');

const routes = express.Router();


routes.get('/',getFormForAddEmployee);


module.exports =routes;