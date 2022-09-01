require('@babel/register');
require('dotenv').config();
const {sequelize} = require('./db/models')
const express = require('express');

const configApp = require('./config/config');
const app = express();
const PORT = 3000;

configApp(app)

app.listen(PORT, async (req, res) => {
  try {
await sequelize.authenticate();
console.log('База данных с охуенным контентом подключена');
    console.log(`Пиздатый сервер работает на порту ${PORT}`);
  } catch (e) {
    
    console.log(e.message);
  }
});
