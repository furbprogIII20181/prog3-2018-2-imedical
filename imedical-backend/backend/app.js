const express = require("express");
const bodyParser = require("body-parser");
const app = express();

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

app.post("/api/addDiagnosis", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });
});

app.get("/api/getUsers", (req, res, next) => {
  const posts = [
    {
      id: "fadsdsadsa",
      username: "gatinhamanhosaxD",
      password: "123456",
      email: "gatinhaxd@hotmail.com",
      fullname: "gatinha manhosa",
      birthDate: "13/03/2018",
      phone: "4793291239",
      sex: "F"
    },
    {
      id: "ASDSDSA",
      username: "gatinhamaD",
      password: "123456",
      email: "eaifei@hotmail.com",
      fullname: "gatinha qwepqwlepq",
      birthDate: "13/03/2018",
      phone: "4793291239",
      sex: "M"
    }
  ];
  res.status(200).json({
    message: "success",
    posts: posts
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
