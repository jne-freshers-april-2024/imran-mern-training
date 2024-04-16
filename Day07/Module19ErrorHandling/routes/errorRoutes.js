const express = require('express');
const errorController = require('../controllers/errorCheck');
const routes = express.Router();

routes.get('/notfound',errorController.notFoundError);


module.exports = routes;