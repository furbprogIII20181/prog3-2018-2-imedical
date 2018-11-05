"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Issues", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Description: {
        type: Sequelize.STRING(9999)
      },
      DescriptionShort: {
        type: Sequelize.STRING(9999)
      },
      MedicalCondition: {
        type: Sequelize.STRING(9999)
      },
      Name: {
        type: Sequelize.STRING(9999)
      },
      PossibleSymptoms: {
        type: Sequelize.STRING(9999)
      },
      TreatmentDescription: {
        type: Sequelize.STRING(9999)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Issues");
  }
};
