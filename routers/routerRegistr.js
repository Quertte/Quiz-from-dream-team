const express = require('express');
const RegisterPage = require('../View/RegistPage');
const { Player, Theme } = require('../db/models');

const registerPageRouter = express.Router();

registerPageRouter.get('/', (req, res) => {
  res.renderComponent(RegisterPage);
});

// registerPageRouter.post('/themes', async (req, res) => {
//   const getThemes = await Theme.findAll();
//   console.log(getThemes);
// });

registerPageRouter.post('/themes', async (req, res) => {
  const { name } = req.body;
  const createPlayer = await Player.create({ name, score: 0 });
  // res.redirect('/themes');
  const getThemes = await Theme.findAll();
  const themeTitle = getThemes.map((thema) => thema.title);
  res.json(themeTitle);
});

module.exports = registerPageRouter;
