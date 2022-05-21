const mongoose = require('mongoose');

const recipe = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ingredients: [String],
    instructions: String,
    img: String,
    prepTime: String,
    cookTime: String,
    servings: String
}, {collection: 'recipes'});
const Recipe = mongoose.model('recipe', recipe)

const recipePrivate = new mongoose.Schema({
   ...recipe.obj,
   public: Boolean
}, {collection: 'recipePrivate'});
const RecipePrivate = mongoose.model('recipePrivate', recipePrivate);
module.exports = {Recipe, RecipePrivate};