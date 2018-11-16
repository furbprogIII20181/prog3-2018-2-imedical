const Diagnosis = require('../models').Diagnosis;

module.exports = {
    create(req, res) {
        return Diagnosis.create(req.body)
            .then(diagnosis => res.status(201).send(diagnosis))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Diagnosis.all()
            .then(diagnosis => res.status(200).send(diagnosis))
            .catch(error => res.status(400).send(error));
    },
    listaas(req, res) {
        return Diagnosis.findAll({
            where: {
                fk_userid: req.body.id
            }
        })
            .then(diagnosis => {
                return res.status(200).send(diagnosis);
            })
            .catch(error => res.status(400).send(error));
    }
};
