const express = require('express')
const morgan = require('morgan');

const homePageRouter = require('../routers/routerHome')
const reactSSR = require('../middlewares/reactSSR')

function configApp(app) {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  // app.use(express.static(path.join(`${__dirname}/../`, 'public')));
  app.use(reactSSR);
  app.use('/', homePageRouter);

}

module.exports = configApp;