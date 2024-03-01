const { error } = require('console')
const Employee = require('../models/Employee')

//retrieve
const getAllEmployee = async (req,res) => {
    try {
     const employees = await Employee.find()
     res.status(200).json(employees)

    } catch (error) {
        res.status(500).json({"Error": `${error.message}`})
    }
}
// create
const createEmployee = (req.res) => {
    const {firstname, department } = req.body
    if (!firstname, department ) = req.body
    if (!firstname || department)return res.status(400).json({"Message": "Fields cannot be empty"})
    try {
const existEmployee = await Employee.findOne({ firstname }).exec()
if (ExistEmployee) return res.status(401).json({"Message": "First name already exist"})
const createEmployee = await Employee.create({ 
"firstname": firstname,
"department": department
})
res.status(200).json({"Message": `Employee ${error.message}`})
}
}
//update
const updateEmployee = async (req,res) => {
    const { firstname, department, id } = req.body
    if(!firstname || !department, id ) = req.body
    if (!firstname || !department) return res.status(400).json({"Message": "Fields cannot be empty"})
    try {
        const foundUser = await Employee.findOne({_id: id}).exec()
        if (!department) return res.status(400).json({"Message": "No user with this id found"})

        if (firstname) foundUser.firstname = firstname
        if (department) foundUser.department = department

        const result = await foundUser.save()
        res.status(200).json({"Message":`Employee ${result.firstname} updated successfully`})
    } catch (error) {
        
    }
}
//delete
const deleteEmployee = async (req,res) => {
    const { id } = req.body
    try {
        const foundUser = await Employee.findOne({ _id: id}).exec()
        if(!foundUser) return res.status(400).json({"Message":"No user with this id found"})
        const result = await Employee.deleteOne({ _id: id})
    res.status(200).json({"Message": `Employee deleted successfully`})
    } catch (error) {
     res.status(500).json({"Error": `${error.message}`})  
    }
}
//GET EMPLOYEE

const getOneEmployee = async (req,res) => {
    const { id } = req.params
    try {
        const employees = await Employee.findOne({ __id: id})
        res.status(200).json(employees)
    } catch (error) {
        res.status(500).json({"Error":})
    }
}


module.exports = {getAllEmployee, createEmployee,updateEmployee}