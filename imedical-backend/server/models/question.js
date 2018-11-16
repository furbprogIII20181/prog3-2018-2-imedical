"use strict";
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      Title: DataTypes.STRING,
      Description: DataTypes.STRING(9999),
      Reply: DataTypes.STRING(9999)
    },
    {}
  );
  Question.associate = function(models) {
    Question.belongsTo(models.User, {
      foreignKey: "fk_userid",
      targetKey: "id"
    });
  };
  return Question;
};
