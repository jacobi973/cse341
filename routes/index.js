const routes = require('express').Router();
const express = require('express');
routes.use('/contacts', require('./contacts'));

routes.get('/', (_req, res) => {
  res.send('Jacob Terrellsss');
});
routes.use('/api/userModel', require('../api/User'))
routes.use('/contacts', require('./contacts'))

module.exports = routes;