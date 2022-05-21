const express = require('express');
const {Recipe, RecipePrivate} = require('../dbConnection/recipe');
const routes = express.Router();


routes.post('/', async (req, res) => {
  const {
    name,
    ingredients,
    instructions,
    public,
    img,
    prepTime,
    cookTime,
    servings
  } = req.body;
  console.log('body', req.body)
  const recipe = {
    name,
    ingredients,
    instructions,
    public,
    img,
    prepTime,
    cookTime,
    servings
  }
  let recipeModelPrivate = new RecipePrivate(recipe);
  await recipeModelPrivate.save();
  if (recipe.public === true) {
    delete recipe.public
    let recipeModelPublic = new Recipe(recipe)
    await recipeModelPublic.save();
  }
  res.json(recipeModelPrivate);
});

routes.put('/put/:id', async (req, res) => {
  RecipePrivate.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.send(user)
  })
})

routes.delete('/delete/:id', async (req, res) => {
  RecipePrivate.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Recipe successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
})
module.exports = routes;