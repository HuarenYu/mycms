var express = require('express');
var router = express.Router();
var models = require('../models');
var config = require('../config');

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
        content: req.body.content,
        threadId: req.body.threadId
    })
    .then(function(data) {
        res.redirect('/admin');
    });
});

router.get('/threads/add', function(req, res, next) {
    res.render('threads-add');
});

router.post('/threads/add', function(req, res, next) {
    models.Thread.create({
        name: req.body.name,
        desc: req.body.desc,
    })
    .then(function(data) {
        res.redirect('/admin');
    });
});

router.get('/configs/add', function(req, res, next) {
    models.Config
    .findOne({order:[['id','desc']]})
    .then(function(result) {
        res.render('configs-add', { configs: result });
    });
});

router.post('/configs/add', function(req, res, next) {
    models.Config.create({
        siteName: req.body.siteName,
        siteNav: req.body.siteNav,
        siteMeta: req.body.siteMeta,
        siteDesc: req.body.siteDesc,
        meta: req.body.meta,
    })
    .then(function(data) {
        return config.reloadConfigs();
    })
    .then(function(data) {
        res.redirect('/admin');
    });
});


module.exports = router;
