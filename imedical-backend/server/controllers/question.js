const Question = require('../models').Question;

module.exports = {
    create(req, res) {
        return Question.create(req.body)
            .then(question => {
                return res.status(201).send(question);
            })
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Question.all()
            .then(questions => res.status(200).send(questions))
            .catch(error => res.status(400).send(error));
    }
};
