//Conexion BD
// npm install mongoose
//Requerir mongoose y poner constaste
const mongoose = require('mongoose');

//direccion de la BD protocolo mongodb
const URI = 'mongodb://localhost/mean-crud';

//metodo con la URL de la direccion de la BD
mongoose.connect(URI)
    //Promesa para verificar conexion
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

//Exportar el modulo
module.exports = mongoose;