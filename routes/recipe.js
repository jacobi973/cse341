const routes = require('express').Router();
const {Recipe} = require('../dbConnection/recipe');



routes.get('/', async(req, res) =>{
    try {
        const all = await Recipe.find();
        res.send({all});
    } catch (e) {
        return res.status(500).send({
            message:
              e.message || 'Some error occurred while getting all contacts.',
          });
    }

})

routes.get('/:id', async(req, res) =>{
    try {
        console.log(req.params.id)
        if(!req.params.id){
            throw 'parameteres not found';
        }
        const findOne = await Recipe.findOne({_id: req.params.id});
        res.send({findOne});
    } catch (e) {
        return res.status(500).send({
            message:
            Recipe.message || 'Some error occurred while getting contact.',
          });
    }

})

module.exports = routes;