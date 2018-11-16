"use strict";
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define(
    "News",
    {
      Title: DataTypes.STRING,
      Content: DataTypes.STRING,
      likes: DataTypes.NUMBER
    },
    {}
  );
  News.associate = function(models) {
    News.belongsTo(models.User, {
      foreignKey: "fk_userid",
      targetKey: "id"
    });
  };
  return News;
};
