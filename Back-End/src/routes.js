// Fazendo os imports 
const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

//Importando os controllers 
const OngController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController'); 
const ProfileController = require('./controllers/ProfileController'); 
const SessionController = require('./controllers/SessionController'); 

//Desacoplando um método do express
const routes = express.Router();

//Chamando os métodos do controller
//Session Login
routes.post('/sessions', SessionController.create);

//Consulta
routes.get('/ongs', OngController.index);
//Cadastro de ongs
routes.post('/ongs', OngController.create);

//Consulta de incidentes
routes.get('/incidents', IncidentsController.index);
//Cadastro de incidentes
routes.post('/incidents', IncidentsController.create);
//Cadastro de incidentes
routes.delete('/incidents/:id', IncidentsController.delete);

//Consulta de incidentes de uma ong específica
routes.get('/profile', ProfileController.index);

module.exports = routes;