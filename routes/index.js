const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Jacob Terrell');
});

module.exports = routes;