'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      't_Configs',
      'meta',
      Sequelize.TEXT
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('t_Configs', 'meta');
  }
};
