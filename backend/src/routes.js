const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile',ProfileController.index);


routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);




/*
routes.post('/users',(request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Ruan sasse'
    });
});
*/

/*
routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
});
*/


//routes.post('/ongs', async (request, response) => {
    
//});


module.exports = routes;