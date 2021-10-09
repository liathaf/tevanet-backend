const express = require('express')
const router = express.Router()
// const { getRecipes , getRecipe , removeRecipe , addRecipe , updateRecipe} = require('./recipe.controller')
const { getProducts , getProduct} = require('./product.controller')



router.get('/', getProducts)
router.get('/:productId', getProduct)
// router.delete('/:recipeId', removeRecipe)
// router.post('/', addRecipe)
// router.put('/:recipeId', updateRecipe)


module.exports = router