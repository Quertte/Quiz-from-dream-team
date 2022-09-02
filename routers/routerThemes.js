const express = require('express')
const ThemesPage = require('../View/ThemesPage')
const themePageRouter = express.Router();
const { Theme } = require('../db/models')

themePageRouter.get('/', async(req,res) => {
    const themeArr = await Theme.findAll();

  res.renderComponent(ThemesPage,  { themeArr })
})

module.exports = themePageRouter