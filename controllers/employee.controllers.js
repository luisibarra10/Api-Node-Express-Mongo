//Definir metodos para reutilizarlos en las rutas
//Requerir modelo de datos y guardarlo en una const
const Employee = require('../models/employee.models');
const employeeController = {};

//Definir consultas a la BD
//Consultar todos los registros
employeeController.getEmployees = async(req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

//Crear registro
employeeController.createEmployee = async(req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    console.log(employee);
    res.json({
        'status': 'Employee Saved'
    });
}

employeeController.getEmployee = async(req, res) => {

    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}

employeeController.putEmployee = async(req, res) => {
    //Otra forma de obtener el id 
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });
    res.json({
        'status': 'Employee Updated'
    })
}

employeeController.deleteEmployee = async(req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Employee Deleted'
    });
}

module.exports = employeeController;