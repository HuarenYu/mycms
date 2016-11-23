'use strict';

module.exports = function(sequelize, DataTypes) {
  var Config = sequelize.define('Config', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    siteName: DataTypes.STRING(512),
    siteNav: DataTypes.TEXT,
    siteMeta: DataTypes.STRING(512),
    siteDesc: DataTypes.STRING(512),
    meta: DataTypes.TEXT,
  }, {
    tableName: 't_Configs',
  });
  return Config;
};