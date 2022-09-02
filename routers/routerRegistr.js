const express = require('express');
const RegisterPage = require('../View/RegistPage');
const { Player, Theme } = require('../db/models');
const ThemesPage = require('../View/ThemesPage');

const registerPageRouter = express.Router();

registerPageRouter.get('/', (req, res) => {
  res.renderComponent(RegisterPage);
});

// registerPageRouter.post('/themes', async (req, res) => {
//   const getThemes = await Theme.findAll();
//   console.log(getThemes);
// });

registerPageRouter.post('/', async (req, res) => {
  const { name } = req.body;
  const createPlayer = await Player.create({ name, score: 0 });
  res.redirect('/themes');
});

module.exports = registerPageRouter;
