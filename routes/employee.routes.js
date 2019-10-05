//Requerir express y el metodo Router
const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee.controllers');

//Rutas
router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.putEmployee);
router.delete('/:id', employee.deleteEmployee);


module.exports = router;