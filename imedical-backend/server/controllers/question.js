const Question = require("../models").Question;
const Sequelize = require("sequelize");
module.exports = {
  create(req, res) {
    return Question.create({
      Title: req.body.Title,
      Description: req.body.Description,
      fk_pacientid: req.userData.userId
    })
      .then(question => {
        question.update(
          {
            fk_doctorid: null
          },
          { fields: ["fk_doctorid"] }
        );
        return res.status(201).send({
          question,
          id: question.id
        });
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Question.all()
      .then(questions => res.status(200).send(questions))
      .catch(error => res.status(400).send(error));
  },
  replyQuestion(req, res) {
    return Question.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(question => {
        console.log(req.body);
        question.update(
          {
            Reply: req.body.Reply,
            fk_doctorid: req.userData.userId
          },
          { fields: ["Reply", "fk_doctorid"] }
        );
      })
      .then(response => {
        return res.status(200).send({
          message: "Successfully updated"
        });
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Question.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(question => {
        console.log(req.body);
        question.update(
          {
            Title: req.body.Title,
            Description: req.body.Description
          },
          { fields: ["Title", "Description"] }
        );
      })
      .then(response => {
        return res.status(200).send({
          message: "Successfully updated"
        });
      })
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Question.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(question => {
        question.destroy({ force: true }).then(response => {
          return res.status(200).send({
            message: "Successfully deleted"
          });
        });
      })
      .catch(error => res.status(400).send(error));
  },
  listQuestionsToReply(req, res) {
    return Question.findAll({
      where: {
        fk_doctorid: null
      }
    })
      .then(questions => {
        console.log(questions);
        return res.status(200).send(questions);
      })
      .catch(error => res.status(400).send(error));
  },
  listQuestionToReply(req, res) {
    return Question.findOne({
      where: Sequelize.and({
        fk_doctorid: null,
        id: req.params.id
      })
    })
      .then(questions => {
        console.log(questions);
        return res.status(200).send(questions);
      })
      .catch(error => res.status(400).send(error));
  },
  listOneById(req, res) {
    return Question.findOne({
      where: Sequelize.and({
        fk_pacientid: req.userData.userId,
        id: req.params.id
      })
    })
      .then(questions => {
        console.log(questions);
        return res.status(200).send(questions);
      })
      .catch(error => res.status(400).send(error));
  },
  listById(req, res) {
    return Question.findAll({
      where: { fk_pacientid: req.userData.userId }
    })
      .then(questions => {
        console.log(questions);
        return res.status(200).send(questions);
      })
      .catch(error => res.status(400).send(error));
  }
};
