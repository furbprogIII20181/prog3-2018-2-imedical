const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db/conn");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

const createTableText = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  data JSONB
);
`;
// create our temp table
console.log("creating...");
db.query(createTableText, (err, res) => {
  if (err) {
    return next(err);
  }
});
console.log("created...");

app.post("/api/insert/user", (req, res, next) => {
  const newUser = req.body;
  db.query("INSERT INTO users(data) VALUES($1) RETURNING id", [newUser], (err, result) => {
    if (err) {
      return next(err);
    }
    console.log('acas', result.rows);
    res.status(201).json({
      id: result.rows[0].id,
    });
  });
});

app.get("/api/get/users/:id", (req, res, next) => {
  db.query("SELECT * FROM users WHERE id = $1", [req.params.username], (err, resp) => {
    if (err) {
      return next(err);
    }
    res.send(resp.rows[0]);
  });
});

app.get("/api/get/users", (req, res, next) => {
  db.query("SELECT * FROM users", (err, resp) => {
    if (err) {
      return next(err);
    }
    res.send(resp.rows);
  });
});

app.post("/api/addDiagnosis", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });
});

module.exports = app;

// app.listen(8000, () => {
//   console.log("Server started!");
// });

// app.route("/api/cats").get((req, res) => {
//   res.send({
//     cats: [{ name: "lilly" }, { name: "lucy" }]
//   });
// });

// app.route("/api/cats/:name").get((req, res) => {
//   const requestedCatName = req.params["name"];
//   res.send({ name: requestedCatName });
// });
