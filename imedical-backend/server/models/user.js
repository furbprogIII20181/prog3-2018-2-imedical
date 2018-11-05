"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      pwd: DataTypes.STRING,
      email: DataTypes.STRING,
      fullname: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      phone: DataTypes.STRING,
      sex: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {};
  return User;
};
