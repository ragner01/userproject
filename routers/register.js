const express = require(`express`)
const router = express.Router()
const registerController = require(`../controllers/registerController`)

Router.post('/', registerController.handleRegister)

module.exports = router