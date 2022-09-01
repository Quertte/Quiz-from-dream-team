const express = require('express')
const HomePage = require('../VIew/HomePage')
const homePageRouter = express.Router()

homePageRouter.get('/',(req,res) => {
  res.renderComponent(HomePage)
})

module.exports = homePageRouter