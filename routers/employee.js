const  express = require('express')
const router = express.Router()
const employeeController = ("../controllers")

router.router('/')
.get(employeeController.getAllEmployee)
.post(employeeController.createEmployee)
.put()
.delete()

router.route('/:id')
.get()

module.exports = router