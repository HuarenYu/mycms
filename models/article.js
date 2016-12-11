'use strict';

module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define('Article', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: DataTypes.STRING(512),
    content: DataTypes.TEXT,
    threadId: DataTypes.INTEGER,
    meta: DataTypes.TEXT
  }, {
    tableName: 't_Articles',
  });
  return Article;
};