"use strict";
var bcrypt = require("bcrypt-nodejs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      pwd: DataTypes.STRING,
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      fullname: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      phone: DataTypes.STRING,
      sex: DataTypes.STRING,
      docID: DataTypes.STRING,
      specialization: DataTypes.STRING,
      type: DataTypes.STRING
    },

    {}
  );

  User.beforeCreate(function(user, options) {
    console.log("asdas");
    return cryptpwd(user.pwd)
      .then(success => {
        user.pwd = success;
      })
      .catch(err => {
        if (err) console.log(err);
      });
  });

  function cryptpwd(pwd) {
    console.log("cryptpwd " + pwd);
    return new Promise(function(resolve, reject) {
      bcrypt.genSalt(10, function(err, salt) {
        // Encrypt pwd using bycrpt module
        if (err) return reject(err);

        bcrypt.hash(pwd, salt, null, function(err, hash) {
          if (err) return reject(err);
          return resolve(hash);
        });
      });
    });
  }

  User.associate = function(models) {
    User.hasMany(models.Question, {
      foreignKey: "fk_userid",
      sourceKey: "id"
    });
  };
  return User;
};
