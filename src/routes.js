const express = require('express');
const routes = express.Router();
const DeviceController = require('./controllers/DeviceController');
const ActionController = require('./controllers/ActionController');


 routes.post('/devices', DeviceController.create)
 routes.get('/devices', DeviceController.index)

 routes.post('/actions', ActionController.create)
 routes.get('/actions', ActionController.index)

/* EXEMPLO 

routes.get('/newroute', NewController.index); 
routes.post('/newroute', NewController.create);
routes.put('/newroute', NewController.update);
routes.delete('/newroute', NewController.delete);
*/

module.exports = routes;