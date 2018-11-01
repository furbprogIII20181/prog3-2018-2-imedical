const db = require("../db");
const express = require("express");
const app = express();

app.get("/api/users/:id", (req, res, next) => {
  db.query("SELECT * FROM users WHERE id = $1", [id], (err, res) => {
    if (err) {
      return next(err);
    }
    res.send(res.rows[0]);
  });
});

app.get("/api/users", (req, res, next) => {
  db.query("SELECT * FROM users", [id], (err, res) => {
    if (err) {
      return next(err);
    }
    res.send(res.rows[0]);
  });
});
