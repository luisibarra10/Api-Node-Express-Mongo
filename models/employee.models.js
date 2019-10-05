//Datos empelados en la DB
//Requerir mongoose y Definir esquemas de datos
const mongoose = require('mongoose');
const { Schema } = mongoose;

//Guardar el esquema en una constante
const EmployeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true }
});

//Modelo de datos de mongoose
module.exports = mongoose.model('Employee', EmployeeSchema);