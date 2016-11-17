var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/article/:id', function(req, res, next) {
    models.Article.findById(req.params.id).then(function(data) {
        res.render('article', { article: data });
    });
});

router.get('/tag/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
