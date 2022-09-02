const express = require('express')
const HomePage = require('../View/HomePage')
const homePageRouter = express.Router()

homePageRouter.get('/',(req,res) => {
  res.renderComponent(HomePage)
})

module.exports = homePageRouter