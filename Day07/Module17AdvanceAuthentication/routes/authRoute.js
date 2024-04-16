const express = require('express');
const authController = require('../controllers/authController');
const routes = express.Router();



routes.get('/login',authController.loginPage);
routes.post('/login/data',authController.loginCheck);
routes.get('/getcookie',authController.getCookies);
routes.get('/deletecookie',authController.deleteCookie);
routes.get('/setcookie',authController.setCookie);
routes.get('/deletesession',authController.deleteSession);

module.exports = routes;