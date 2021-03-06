var models = require('./models');

var configs = null;

module.exports.getConfigs = function() {
    return new Promise(function(resolve, reject) {
        if (configs) {
            resolve(configs);
            return;
        }
        models.Config.findOne({order:[['id','desc']]})
        .then(function(result) {
            configs = result;
            configs.siteNav = JSON.parse(configs.siteNav) || [];
            configs.meta = JSON.parse(configs.meta) || {};
            resolve(configs);
        });
    });
};

module.exports.reloadConfigs = function() {
    return new Promise(function(resolve, reject) {
        models.Config.findOne({order:[['id','desc']]})
        .then(function(result) {
            configs = result;
            configs.siteNav = JSON.parse(configs.siteNav) || [];
            configs.meta = JSON.parse(configs.meta) || {};
            resolve(configs);
        });
    });
};