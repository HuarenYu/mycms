var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
    var page = req.query.page || 1;
    var limit = 2;
    var offset = (page - 1) * limit;
    Promise.all([models.Article.count(), models.Article.findAll({ offset: offset, limit: limit })])
    .then(function(results) {
        res.render('index', {
            articles: results[1],
            pager: {
                pageSize: limit,
                totalCount: results[0],
                pageCount: Math.ceil(results[0] / limit),
                currentPage: page
            }
        });
    });
});

router.get('/article/:id', function(req, res, next) {
    models.Article.findById(req.params.id).then(function(result) {
        res.render('article', { article: result });
    });
});

router.get('/thread/:id', function(req, res, next) {
    models.Article.findAll({where: {threadId: req.params.id}}).then(function(result) {
        res.render('thread', { articles: result });
    });
});

module.exports = router;
