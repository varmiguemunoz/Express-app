const express = require ('express');

const productsRouter = require('./products.router')
const usersRouter = require('./user.router');

function routerApi (app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter)
  router.use('/users', usersRouter);
}

module.exports = routerApi;
