//Instalar express,requerirlo y guardarlo en una const con el mismo nombre
//Instalar morgan,requerirlo 
//Guardar el objeto exprees en la const app
const express = require('express');
const morgan = require('morgan');
const app = express();

//Requerir unicamente mongoose de la database
const { mongoose } = require('./database');

//Settings => Configuraciones del servidor 
app.set('port', process.env.PORT || 3000); //Configurar de puerto por defecto o sino puerto 3000

//Middlewares => Procesar datos
app.use(morgan('dev')); //Respuesta del servidor 
app.use(express.json()); //Respuestas en formato Json

//Routes => Rutas del servidor
app.use('/api/employees', require('./routes/employee.routes'));

//Starting the serve
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));

});