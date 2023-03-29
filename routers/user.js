const express = require("express");
const user = express.Router();
user
  .route("/")
  .get((req, res) => {
    console.log(req.url);
    res.render("loginSignup", { message: "" });
  })
  .post((req, res) => {
    console.log(req);
    console.log(req.body);
    res.json({ message: "homepage " });
  });

module.exports = user;
