'use strict';

module.exports = function(sequelize, DataTypes) {
  var Thread = sequelize.define('Thread', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING(512),
    desc: DataTypes.STRING(512),
  }, {
    tableName: 't_Threads',
  });
  return Thread;
};