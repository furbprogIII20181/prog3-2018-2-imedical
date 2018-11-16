const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("../models/user.js")(sequelize, Sequelize);
db.diagnosis = require("../models/diagnosis.js")(sequelize, Sequelize);
db.issue = require("../models/issue.js")(sequelize, Sequelize);
db.question = require("../models/question.js")(sequelize, Sequelize);

db.issue.hasMany(db.diagnosis, {
  foreignKey: "fk_issueid",
  sourceKey: "id"
});
db.diagnosis.belongsTo(db.issue, { foreignKey: "fk_issueid", targetKey: "id" });
db.user.hasMany(db.question, {
  foreignKey: "fk_userid",
  sourceKey: "id"
});

db.question.belongsTo(db.user, {
  foreignKey: "fk_userid",
  targetKey: "id"
});
module.exports = db;
