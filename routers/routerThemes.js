const express = require('express');
const ThemesPage = require('../View/ThemesPage');
const { Question } = require('../db/models');

const themePageRouter = express.Router();
const { Theme } = require('../db/models');

themePageRouter.get('/', async (req, res) => {
  const themeArr = await Theme.findAll();

  res.renderComponent(ThemesPage, { themeArr });
});
themePageRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const questions = await Question.findAll({ where: { theme_id: id } });
res.renderComponent()
});

module.exports = themePageRouter;
