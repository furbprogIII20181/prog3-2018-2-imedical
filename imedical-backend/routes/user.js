const User = sequelize.define("user", {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  fullName: {
    type: Sequelize.STRING
  },
  birthDate: {
    type: Sequelize.DATE
  },
  phone: {
    type: Sequelize.STRING
  },
  sex: {
    type: Sequelize.STRING
  }
});

module.exports = User;
