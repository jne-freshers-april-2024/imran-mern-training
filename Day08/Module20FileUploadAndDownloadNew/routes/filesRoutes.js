const express = require('express');
const fileController = require('../controllers/fileController');
const routes = express.Router();


routes.get('/uploadform/:id',fileController.filePickerForm);
routes.post('/uploadimage/:empId',fileController.fileUploader);
routes.get('/downloadimage/:id',fileController.downloadFile);
routes.get('/deleteimage/:id',fileController.deleteFile);
module.exports = routes;