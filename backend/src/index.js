const express = require('express'); //1
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

/* caso o app esteja liberado para a produção origin: endereço hospedado
app.use(cors({
   origin: 'http://meuapp.com'
}));
*/


app.use(express.json());
app.use(routes); // esta linha tem que ser sempre  abaixo da linha app.use(express.json()); 

app.listen(3333);
/**
 * Rota / Recurso
 */

/**
 * query params: parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * route params: parametros utilizados para identificar recursos
 * request body: corpo da requisição utilizado para criar ou alterar recursos
 */

    //c // precisa ter :  /:id
    //const params = request.params;
    //console.log(params);

    //app.get('/users',(request, response) => {
    //const params = request.query;
    //console.log(params);


    /**
     * Driver: select * from users
     * query builder: table('users').select('*').where()
     */

    


