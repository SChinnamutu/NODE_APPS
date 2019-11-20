'use strict';

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, 
      autoIncrement: true, allowNull: false },
    user_name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  return Users;
};
