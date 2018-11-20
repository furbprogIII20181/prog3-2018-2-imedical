const userController = require("../controllers").users;
const diagnosisController = require("../controllers").diagnosis;
const issuesController = require("../controllers").issue;
const questionController = require("../controllers").question;
const newsController = require("../controllers").news;

const checkAuth = require("../middleware/check-auth");
module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );

  app.post("/api/question", checkAuth, questionController.create);
  app.put("/api/question/:id", checkAuth, questionController.update);
  app.put(
    "/api/replyQuestion/:id",
    checkAuth,
    questionController.replyQuestion
  );
  app.delete("/api/question/:id", checkAuth, questionController.delete);
  app.get("/api/question", checkAuth, questionController.listById);
  app.get("/api/question/:id", checkAuth, questionController.listOneById);
  app.get("/api/reply", checkAuth, questionController.listQuestionsToReply);
  app.get("/api/reply/:id", checkAuth, questionController.listQuestionToReply);

  app.post("/api/news", checkAuth, newsController.create);
  app.put("/api/news/:id", checkAuth, newsController.update);
  app.delete("/api/news/:id", checkAuth, newsController.delete);
  app.get("/api/news/:id", checkAuth, newsController.listById);
  app.get("/api/allNews", newsController.list);

  app.post("/api/issue", checkAuth, issuesController.create);
  app.get("/api/issues", checkAuth, issuesController.list);
  app.post("/api/diagnosis", checkAuth, diagnosisController.create);
  app.post("/api/getDiagnosis", checkAuth, diagnosisController.listaas);

  app.get("/api/getUsers", userController.list);

  app.post("/api/signup", userController.create);
  app.post("/api/login", userController.login);
};
