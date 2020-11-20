const express = require('express')
const UserController = require('./controllers/UserController')
const routes = express.Router()


routes.post('/users', UserController.create)
routes.post('/users/email', UserController.show)
routes.put('/user/:id', UserController.update)
routes.get('/user/:id', UserController.showById)
routes.delete('/user/:id', UserController.destroy)


module.exports = routes