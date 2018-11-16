'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    Title: DataTypes.STRING,
    Content: DataTypes.STRING,
    Likes: DataTypes.NUMBER
  }, {});
  News.associate = function(models) {
    // associations can be defined here
  };
  return News;
};