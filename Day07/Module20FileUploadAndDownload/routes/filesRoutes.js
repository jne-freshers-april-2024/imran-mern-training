const express = require('express');
const fileController = require('../controllers/fileController');
const routes = express.Router();


routes.get('/uploadform',fileController.filePickerForm);


module.exports = routes;