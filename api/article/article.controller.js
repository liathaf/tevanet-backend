const articleService = require('./article.service');


async function getArticles(req,res){ 
    const articles = await articleService.query();
    res.send(articles);
}

async function getArticle(req,res){
    const articleId = req.params.articleId;
    const article = await articleService.getById(articleId);
    res.send(article);
} 



module.exports = {
    getArticles,
    getArticle
}
