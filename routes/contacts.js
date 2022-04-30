const routes = require('express').Router();
const User = require('../dbConnection/User');

async function getDocument(){
    const all = await User.find();
    const findOne = await User.find({_id: "626c67ba7fbf4476d6afbe84"});
    return {all, findOne};
}

routes.get('/', async(req, res) =>{
    const {all, findOne} = await getDocument();
    res.send({all, findOne});
})

module.exports = routes;