const News = require("../models").News;

module.exports = {
  create(req, res) {
    console.log("aaaaaaa", req.body);
    return News.create(req.body)
      .then(news => res.status(201).send(news))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return News.all()
      .then(news => res.status(200).send(news))
      .catch(error => res.status(400).send(error));
  }
};
