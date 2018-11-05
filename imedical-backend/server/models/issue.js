'use strict';
module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define('Issue', {
    Description: DataTypes.STRING,
    DescriptionShort: DataTypes.STRING,
    MedicalCondition: DataTypes.STRING,
    Name: DataTypes.STRING,
    PossibleSymptoms: DataTypes.STRING,
    TreatmentDescription: DataTypes.STRING
  }, {});
  Issue.associate = function(models) {
    // associations can be defined here
  };
  return Issue;
};