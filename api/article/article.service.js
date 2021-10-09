const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
}

async function query() {
    const collection = await dbService.getCollection('article');
    try {
        const articles = await collection.find().toArray();
        return articles;
    } catch (err) {
        console.log('ERROR: cannot find articles');
        throw err;
    }
}

async function getById(articleId) {
    const collection = await dbService.getCollection('article');

    try {
        const article = await collection.findOne({ "_id": ObjectId(articleId) });
        return article;
    } catch (err) {
        console.log('ERROR: cannot find article');
        throw err;
    }
}

