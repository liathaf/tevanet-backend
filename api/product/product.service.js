const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    // remove,
    // add,
    // update

}

async function query(filterBy) {
    const collection = await dbService.getCollection('product');
    try {
        const products = await collection.find(filterBy).toArray();
        return products;
    } catch (err) {
        console.log('ERROR: cannot find products');
        throw err;
    }
}

async function getById(productId) {
    const collection = await dbService.getCollection('product');

    try {
        const product = await collection.findOne({ "_id": ObjectId(productId) });
        return product;
    } catch (err) {
        console.log('ERROR: cannot find product');
        throw err;
    }
}

// async function remove(recipeId){
//    const collection = await dbService.getCollection('recipe'); 
//    try {
//         await collection.remove({"_id":ObjectId(recipeId)}) ;
//    } catch(err) {
//        console.log('ERROR: cannot remove recipe');
//        throw err;
//    }
// }

// async function add(recipe){
//    const collection = await dbService.getCollection('recipe'); 
//    try {
//        await collection.insertOne(recipe);
//    } catch(err) {
//        console.log('ERROR: cannot add recipe');
//        throw err;
//    }
// }

// async function update(recipe){
//    const collection = await dbService.getCollection('recipe'); 
//    recipe._id = ObjectId(recipe._id);
//    try {
//        await collection.replaceOne({"_id":recipe._id}, {$set : recipe});
//    } catch(err) {
//        console.log('ERROR: cannot update recipe');
//        throw err;
//    }
// }