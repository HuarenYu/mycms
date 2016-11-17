'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: DataTypes.STRING(512),
    email: DataTypes.STRING(512),
    password: DataTypes.STRING(512),
  }, {
    tableName: 't_Users',
    indexs: [
        {
          unique: true,
          fields: ['email']
        }
    ]
  });
  return User;
};