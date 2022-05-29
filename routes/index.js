const routes = require('express').Router();
routes.use('/contacts', require('./recipe'));

routes.get('/', (_req, res) => {
  res.send('Jacob Terrellsss');
});
routes.use('/api/recipeModel', require('../api/recipeModel'))
routes.use('/recipes', require('./recipe'))
routes.use('/private', require('./recipePrivate'))
module.exports = routes;