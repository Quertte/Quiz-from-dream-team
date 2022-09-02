const express = require('express');
const ThemesPage = require('../View/ThemesPage');
const { Question } = require('../db/models');
const QuestionList = require('../View/QuestionList');


const themePageRouter = express.Router();
const { Theme } = require('../db/models');

themePageRouter.get('/', async (req, res) => {
  const themeArr = await Theme.findAll();

  res.renderComponent(ThemesPage, { themeArr });
});
themePageRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const questions = await Question.findAll({ where: { theme_id: id } });
  console.log(questions);
  res.renderComponent(QuestionList, { questions });
});


module.exports = themePageRouter;
