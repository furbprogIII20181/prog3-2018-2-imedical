"use strict";
module.exports = (sequelize, DataTypes) => {
  const Diagnosis = sequelize.define(
    "Diagnosis",
    {
      dt_diagnosis: DataTypes.DATE
    },
    {}
  );
  Diagnosis.associate = function(models) {
    models.User.hasMany(Diagnosis, {
      foreignKey: "fk_userid",
      sourceKey: "id"
    });
    Diagnosis.belongsTo(models.User, {
      foreignKey: "fk_userid",
      targetKey: "id"
    });
  };
  return Diagnosis;
};
