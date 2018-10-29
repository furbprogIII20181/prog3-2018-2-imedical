const express = require("express");
const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fadsdsadsa",
      title: "quem falo",
      content: "nao blz"
    },
    {
      id: "fadsdsadsa",
      title: "q q tu acha?",
      content: "e nao pode"
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
