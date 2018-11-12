const User = require("../models").User;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports = {
  create(req, res) {
    return User.create(req.body)
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User.all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  login(req, res) {
    let fetchedUser;
    User.findOne({ username: req.body.username })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            message: "Auth failed, no email or username were found"
          });
        }
        fetchedUser = user;
        console.log(req.body.password, user.pwd);
        return bcrypt.compare(req.body.password, user.pwd);
      })
      .then(result => {
        console.log(result);
        if (!result) {
          return res.status(401).json({
            message: "Auth failed: incorret email/username or password"
          });
        }
        const token = jwt.sign(
          { email: fetchedUser.email, id: fetchedUser.id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
        );
        console.log("xddddddddd", token);
        return res.status(200).json({
          message: "Success",
          token
        });
      })
      .catch(err => {
        return res.status(401).json({
          message: `Auth failed: ${err}`
        });
      });
  }
};
