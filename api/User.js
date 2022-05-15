const express = require('express');
const Contact = require('../dbConnection/User');
const routes = express.Router();

routes.post('/', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday
    } = req.body;
    console.log('body', req.body)
    let contact = {};
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.email = email;
    contact.favoriteColor = favoriteColor;
    contact.birthday = birthday;
    let userModel = new Contact(contact);
    await userModel.save();
    res.json(userModel);
  } catch (e) {
    return res.status(500).send({
      message:
        err.message || 'Some error occurred while creating the Contact.',
    });
  }
});

routes.put('/put/:id', async (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.send(user)
  })
})

routes.delete('/delete/:id', async (req, res) => {
  Contact.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Contact successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
})
module.exports = routes;