const Question = require('../models').Question;

module.exports = {
    create(req, res) {
        return Question.create({
            Title: req.body.Title,
            Description: req.body.Description,
            fk_pacientid: req.userData.userId
        })
            .then(question => {
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
                    { fields: ['Title', 'Description'] }
                );
            })
            .then(response => {
                return res.status(200).send({
                    message: 'Successfully updated'
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
                        message: 'Successfully deleted'
                    });
                });
            })
            .catch(error => res.status(400).send(error));
    },
    listById(req, res) {
        return Question.findAll({
            where: {
                fk_pacientid: req.userData.userId
            }
        })
            .then(questions => {
                console.log(questions);
                return res.status(200).send(questions);
            })
            .catch(error => res.status(400).send(error));
    }
};
