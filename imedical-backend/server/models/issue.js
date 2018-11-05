"use strict";
module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define(
    "Issue",
    {
      Description: DataTypes.STRING(9999),
      DescriptionShort: DataTypes.STRING(9999),
      MedicalCondition: DataTypes.STRING(9999),
      Name: DataTypes.STRING(9999),
      PossibleSymptoms: DataTypes.STRING(9999),
      TreatmentDescription: DataTypes.STRING(9999)
    },
    {}
  );
  Issue.associate = function(models) {
    // associations can be defined here
  };
  return Issue;
};
