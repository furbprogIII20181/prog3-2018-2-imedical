'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define('Ratings', {
    Title: DataTypes.STRING,
    Content: DataTypes.STRING,
    Rating: DataTypes.INTEGER
  }, {});
  Ratings.associate = function(models) {
    // associations can be defined here
  };
  return Ratings;
};