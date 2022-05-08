const routes = require('express').Router();
const User = require('../dbConnection/User');



routes.get('/', async(req, res) =>{
    const all = await User.find();
    res.send({all});
})

routes.get('/:id', async(req, res) =>{
    const findOne = await User.findOne({id: req.params.id});
    res.send({findOne});
})
module.exports = routes;