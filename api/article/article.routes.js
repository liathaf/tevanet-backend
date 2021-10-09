const express = require('express')
const router = express.Router()
const { getArticles , getArticle} = require('./article.controller')



router.get('/', getArticles)
router.get('/:articleId', getArticle)


module.exports = router