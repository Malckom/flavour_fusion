const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes 
*/
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/about', recipeController.aboutRecipe);
router.get('/contact', recipeController.contactRecipe);
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
router.get('/recipe/:id/edit', recipeController.editRecipe);
router.post('/recipe/:id/edit', recipeController.editRecipeOnPost);
router.get('/recipe/:id/delete', recipeController.deleteRecipe);


console.log(recipeController); // Check what is being imported

module.exports = router;