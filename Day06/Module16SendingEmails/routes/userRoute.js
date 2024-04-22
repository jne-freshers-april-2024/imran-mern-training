const express = require('express');

const routes = express.Router();

const UserController = require('../controllers/userController');



routes.get('/alluser',UserController.allUsers);

routes.post('/insert',UserController.addUser);

routes.put('/update/:id',UserController.updateUser);

routes.delete('/delete/:id',UserController.deleteUser);

routes.get('/find/:id',UserController.findById);


module.exports = routes;
