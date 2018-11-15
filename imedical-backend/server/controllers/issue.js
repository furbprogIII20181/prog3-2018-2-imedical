const Issue = require('../models').Issue;

module.exports = {
    create(req, res) {
        return Issue.create(req.body)
            .then(issue => res.status(201).send(issue))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Issue.all()
            .then(issues => res.status(200).send(issues))
            .catch(error => res.status(400).send(error));
    }
};
