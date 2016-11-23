'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('t_Configs', [{
        siteName: 'my site',
        siteNav: '',
        siteMeta: '[]',
        siteDesc: '',
        meta: '{"username":"admin","password":"admin"}',
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('t_Configs', null, {});
  }
};
