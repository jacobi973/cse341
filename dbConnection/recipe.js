const mongoose = require('mongoose');

const recipe = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ingredients: [String],
    instructions: String,
    img:
    {
        data: Buffer,
        contentType: String
    },
    prepTime: String,
    cookTime: String,
    servings: String
}, {collection: 'recipes'});
const Recipe = mongoose.model('recipe', recipe);

const recipePrivate = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ingredients: [String],
    instructions: String,
    public: {
        type: Boolean,
        required: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    prepTime: String,
    cookTime: String,
    servings: String
}, {collection: 'recipes'});
const RecipePrivate = mongoose.model('recipePrivate', recipePrivate);
module.exports = {Recipe, RecipePrivate};