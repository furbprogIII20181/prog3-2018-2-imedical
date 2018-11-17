const News = require('../models').News;

module.exports = {
    create(req, res) {
        return News.create({
            Title: req.body.Title,
            Content: req.body.Content,
            fk_userid: req.userData.userId
        })
            .then(news => {
                return res.status(201).send({
                    news,
                    id: news.id
                });
            })
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return News.all()
            .then(news => res.status(200).send(news))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return News.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(news => {
                console.log(req.body);
                news.update(
                    {
                        Title: req.body.Title,
                        Content: req.body.Content
                    },
                    { fields: ['Title', 'Content'] }
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
        return News.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(news => {
                news.destroy({ force: true }).then(response => {
                    return res.status(200).send({
                        message: 'Successfully deleted'
                    });
                });
            })
            .catch(error => res.status(400).send(error));
    },
    listById(req, res) {
        return News.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(news => {
                console.log(news);
                return res.status(200).send(news);
            })
            .catch(error => res.status(400).send(error));
    }
};
