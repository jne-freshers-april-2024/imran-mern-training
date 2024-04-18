const express = require('express');
const employeeController = require('../controller/employeeController');
const empDataMiddleware = require('../middleware/emplyeeData');
const salaryCheckMiddleware = require('../middleware/salaryCheck');
const router = express.Router();

router.get('/allData',employeeController.allData);
router.post('/addData',salaryCheckMiddleware,empDataMiddleware,employeeController.addEmployee);
router.get('/findData',employeeController.findLimitedData);
router.get('/agewiseData',employeeController.agewiseData);

module.exports = router ;