const userController = require("../controllers").users;
const diagnosisController = require("../controllers").diagnosis;
const issuesController = require("../controllers").issue;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );

  app.post("/api/issue", issuesController.create);
  app.get("/api/issues", issuesController.list);
  app.post("/api/diagnosis", diagnosisController.create);
  app.post("/api/diagnosis/list", diagnosisController.listaas);
  app.post("/api/user", userController.create);
  app.get("/api/users", userController.list);
};
