var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
    Promise
    .all([models.Article.findAll(), models.Thread.findAll()])
    .then(function(datas) {
        res.render('admin', { articles: datas[0], threads: datas[1] });
    });
});

router.get('/articles/add', function(req, res, next) {
    models.Thread.findAll().then(function(threads) {
        res.render('article-add', { threads: threads});
    });
});

router.post('/articles/add', function(req, res, next) {
    models.Article.create({
        title: req.body.title,
        content: req.body.content
    })
    .then(function(data) {
        res.redirect('/admin');
    });
});


module.exports = router;
