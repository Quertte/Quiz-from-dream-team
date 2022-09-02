const express = require('express')
const AboutGamePage = require('../View/AboutGamePage')
const aboutGameRouter = express.Router()

aboutGameRouter.get('/aboutgame', (req,res) => {
  res.renderComponent(AboutGamePage)
})

module.exports = aboutGameRouter