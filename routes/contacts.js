const routes = require('express').Router();
const Recipe = require('../dbConnection/recipe');



routes.get('/', async(req, res) =>{
    const all = await Recipe.find();
    res.send({all});
})

routes.get('/:id', async(req, res) =>{
    const findOne = await Recipe.findOne({id: req.params.id});
    res.send({findOne});
})
module.exports = routes;