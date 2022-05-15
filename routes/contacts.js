const routes = require('express').Router();
const User = require('../dbConnection/User');



routes.get('/', async(req, res) =>{
    try {
        const all = await User.find();
        res.send({all});
    } catch (e) {
        return res.status(500).send({
            message:
              err.message || 'Some error occurred while getting all contacts.',
          });
    }

})

routes.get('/:id', async(req, res) =>{
    try {
        const findOne = await User.findOne({id: req.params.id});
        res.send({findOne});
    } catch (e) {
        return res.status(500).send({
            message:
              err.message || 'Some error occurred while getting contact.',
          });
    }

})
module.exports = routes;