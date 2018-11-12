const userController = require("../controllers").users;
const diagnosisController = require("../controllers").diagnosis;
const issuesController = require("../controllers").issue;
const questionController = require("../controllers").question;
const checkAuth = require("../middleware/check-auth");
module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );

  app.post("/api/question", questionController.create);
  app.post("/api/issue", checkAuth, issuesController.create);
  app.get("/api/issues", checkAuth, issuesController.list);
  app.post("/api/diagnosis", checkAuth, diagnosisController.create);
  app.post("/api/getDiagnosis", checkAuth, diagnosisController.listaas);

  app.get("/api/getUsers", userController.list);

  app.post("/api/signup", userController.create);
  app.post("/api/login", userController.login);
};
