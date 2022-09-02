const express = require('express');
const HomePage = require('../View/HomePage');
const { Question } = require('../db/models');

const homePageRouter = express.Router();

homePageRouter.get('/', (req, res) => {
  res.renderComponent(HomePage);
});

homePageRouter.post('/', async (req, res) => {
  // console.log(req.body);
  const { answer } = req.body;

  const findAnswer = await Question.findOne({ where: { answer } });

  // console.log(findAnswer.answer);
  if (findAnswer?.answer === answer) {
    // res.send('<div><p>ТЫ ПОБЕДИЛ</p></div>');
    res.json({ success: 'vse ok ' });
  } else {
    res.json({ lose: 'try' });
  }
  // const findFromDb = findAnswer.answer;
  // console.log(findFromDb);
  // if (answer.toLowerCase() === findFromDb.toLowerCase()) {
  //   // console.log('ответ правильный');
  //   res.send('');
  // }
});

module.exports = homePageRouter;
