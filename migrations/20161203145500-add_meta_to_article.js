'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      't_Articles',
      'meta',
      Sequelize.TEXT
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('t_Articles', 'meta');
  }
};
