const db = require("../db/conn");
const express = require("express");
const app = express();

app.post("/api/insert/user", (req, res, next) => {
  // create a new user
  console.log('body', req.body);
  const newUser = JSON.parse(req.body);
  db.query('INSERT INTO users(data) VALUES($1)', [newUser], (err, res) => {
    if (err) {
      return next(err);
    }
    res.status(201).json({
      message: "OK"
    });
  });
});

app.get("/api/get/users/:id", (req, res, next) => {
  db.query("SELECT * FROM users WHERE id = $1", [id], (err, res) => {
    if (err) {
      return next(err);
    }
    res.send(res.rows[0]);
  });
});

app.get("/api/get/users", (req, res, next) => {
  db.query("SELECT * FROM users", [id], (err, res) => {
    if (err) {
      return next(err);
    }
    res.send(res.rows);
  });
});

module.exports = app;