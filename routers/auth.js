const express = require("express");
const auth = express.Router();
require("dotenv").config();
const mongoose = require("mongoose");
const UserDB = require("../models/userModles");
const bcrypt = require("bcryptjs");
/**
 * Mongodb connection
 */
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.log(`Database connection error due to ${err}`);
  });

auth
  .route("/login")
  .get((req, res) => {
    console.log(req.url);
    res.json({ message: "Please go back to home page" });
  })
  .post(async (req, res) => {
    console.log(req.url);
    const result = await UserDB.insertOne(req.body);
    console.log(result);
    res.json(req.body);
  });

auth.route("/register").post(async (req, res) => {
  const { email, password, username, mobile } = req.body;
  console.log(req.url);
  console.log(email, password, username);
  let user = await UserDB.findOne({ email });
  if (user) {
    res.redirect("/loginSignup");
  }
  const hashedPass = await bcrypt.hash(password, 12);
  user = new UserDB({
    username,
    password: hashedPass,
    email,
    mobile,
  });
  const result = await user.save();
  console.log(result);
  res.render("index");
});

module.exports = auth;
