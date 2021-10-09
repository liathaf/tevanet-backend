const productService = require('./product.service');


async function getProducts(req,res){
    let filterBy = {}; 
    if (req.query.category) filterBy = {category: req.query.category} // filter by category - from products cmp
    else if (req.query.searchwords) filterBy = { searchWords : {$regex : `.*${req.query.searchwords}.*`}} // filter by search input - form filter-product cmp
    const products = await productService.query(filterBy);
    res.send(products);
}

async function getProduct(req,res){
    const productId = req.params.productId;
    const product = await productService.getById(productId);
    res.send(product);
} 

// async function removeRecipe(req,res){
//     const recipeId = req.params.recipeId;
//     await recipeService.remove(recipeId);
//     const newRecipes = await getRecipes(req,res);
//     res.send(newRecipes);
// } 

// async function addRecipe(req,res){
//     const recipe = req.body;
//     await recipeService.add(recipe);
//     res.send(recipe);
// } 

// async function updateRecipe(req,res){
//     const recipe = req.body;
//     await recipeService.update(recipe);
//     res.send(recipe);
// } 

module.exports = {
    getProducts,
    getProduct
}
