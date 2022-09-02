const express = require('express')
const morgan = require('morgan');

const homePageRouter = require('../routers/routerHome')
const reactSSR = require('../middlewares/reactSSR');
const registerPageRouter = require('../routers/routerRegistr');
const aboutGameRouter = require('../routers/oboutGameRouter');

function configApp(app) {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  // app.use(express.static(path.join(`${__dirname}/../`, 'public')));
  app.use(reactSSR);
  app.use('/', homePageRouter);
  app.use('/registration',registerPageRouter)
  app.use('/', aboutGameRouter)
  app.use(express.static('public'))

}

module.exports = configApp;