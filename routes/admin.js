var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
    models.Article.findAll().then(function(data) {
        res.render('admin', { articles: data });
    });
});

router.get('/articles/add', function(req, res, next) {
    res.render('article-add');
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
