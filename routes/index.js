const routes = require('express').Router();

const authCheck = (req, res, next) => {
  if(!req.user){
      res.redirect('/auth/home');
  } else {
      next();
  }
};

routes.get('/', authCheck, (req, res) => {
  res.render('home', { user: req.user });
});
routes.use('/api/recipeModel', require('../api/recipeModel'))
routes.use('/recipes', require('./recipe'))
routes.use('/private', require('./recipePrivate'))
module.exports = routes;