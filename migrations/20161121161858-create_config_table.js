'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('t_Configs', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      siteName: {
        type: Sequelize.STRING(512)
      },
      siteNav: {
        type: Sequelize.TEXT
      },
      siteMeta: {
        type: Sequelize.STRING(512)
      },
      siteDesc: {
        type: Sequelize.STRING(512)
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('t_Configs');
  }
};
