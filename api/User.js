const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../dbConnection/User');
const routes = express.Router();

routes.post('/', async(req, res) => {
  const{firstName,lastName,email,favoriteColor,birthday} = req.body;
  let contact = {};
  contact.firstName = firstName;
  contact.lastName = lastName;
  contact.email = email;
  contact.favoriteColor = favoriteColor;
  contact.birthday = birthday;
  let userModel = new Contact(contact);
 await userModel.save();
 res.json(userModel);
});

module.exports = routes;