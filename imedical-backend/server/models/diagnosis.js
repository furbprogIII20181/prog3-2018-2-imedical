'use strict';
module.exports = (sequelize, DataTypes) => {
  const Diagnosis = sequelize.define('Diagnosis', {
    dt_diagnosis: DataTypes.DATE
  }, {});
  Diagnosis.associate = function(models) {
    // associations can be defined here
  };
  return Diagnosis;
};