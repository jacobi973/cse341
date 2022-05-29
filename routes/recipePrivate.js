const routes = require('express').Router();
const {RecipePrivate} = require('../dbConnection/recipe');



routes.get('/', async(req, res) =>{
    try {
        const all = await RecipePrivate.find();
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
        const findOne = await RecipePrivate.findOne({id: req.params.id});
        res.send({findOne});
    } catch (e) {
        return res.status(500).send({
            message:
            RecipePrivate.message || 'Some error occurred while getting contact.',
          });
    }

})

module.exports = routes;