const express = require('express');
const HomePage = require('../View/HomePage');
const { Question } = require('../db/models');

const homePageRouter = express.Router();

homePageRouter.get('/', (req, res) => {
  res.renderComponent(HomePage);
});

homePageRouter.post('/', async (req, res) => {
  // console.log(req.body);
  const { theme_id } = req.body;
  const { answer } = req.body;
  const findAnswer = await Question.findOne({ where: { theme_id } });
  const findFromDb = findAnswer.answer;
  // console.log(findFromDb);
  if (answer.toLowerCase() === findFromDb.toLowerCase()) {
    // console.log('ответ правильный');
    res.send('<div><p>ТЫ ПОБЕДИЛ</p></div>');
  }
});

module.exports = homePageRouter;
