const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    firstname: {
        type: string,
        required: true
        },
        department: {
            type: String,
            required: true
        }
    }, { timestamps: true })

    const employeeModel = mongoose.model('Employee', employeeSchema)

    module.exports = employeeModel