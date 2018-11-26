const Ratings = require("../models").Ratings;
const Sequelize = require("sequelize");
module.exports = {
  create(req, res) {
    return Ratings.create({
      Title: req.body.Title,
      Content: req.body.Content,
      Rating: req.body.Rating,
      fk_userid: req.userData.userId
    })
      .then(rating => {
        return res.status(201).send({
          rating,
          id: rating.id
        });
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Ratings.findAll({
      where: { fk_userid: req.userData.userId }
    })
      .then(ratings => {
        return res.status(200).send(ratings);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Ratings.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(ratings => {
        ratings.update(
          {
            Title: req.body.Title,
            Content: req.body.Content,
            Rating: req.body.Rating
          },
          { fields: ["Title", "Content"] }
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
    return Ratings.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(rating => {
        rating.destroy({ force: true }).then(response => {
          return res.status(200).send({
            message: "Successfully deleted"
          });
        });
      })
      .catch(error => res.status(400).send(error));
  },
  listOneById(req, res) {
    return Rating.findOne({
      where: Sequelize.and({
        id: req.params.id
      })
    })
      .then(ratings => {
        return res.status(200).send(ratings);
      })
      .catch(error => res.status(400).send(error));
  }
};
