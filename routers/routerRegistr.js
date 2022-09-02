const express = require('express')
const RegisterPage = require('../View/RegistPage')
const registerPageRouter = express.Router()

registerPageRouter.get('/registration', (req,res) => {
  res.renderComponent(RegisterPage)
})


module.exports = registerPageRouter