const express = require("express");
const routes = express.Router();
const client = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
let dbinstance;
client.connect("mongodb://localhost:27017", (err, database) => {
  if (err) console.log("Error in db");
  else {
    console.log("Connected to db");
    dbinstance = database.db("Batch3");
  }
});

routes.route("/").get((req, res) => {
  dbinstance
    .collection("Users")
    .find({})
    .toArray((err, result) => {
      console.log(result);
      res.render("Users/index", { users: result });
    });
  // res.end("User Home Page Called..")
});

routes.route("/Get/:userid").get((req, res) => {
  let query = { _id: ObjectId(req.params.userid) };
  dbinstance.collection("Users").findOne(query, (err, result) => {
    res.render("Users/get", { users: result });
  });
  // res.end("User Home Page Called..")
});
routes.route("/Edit/:userid").get((req, res) => {
  let query = { _id: ObjectId(req.params.userid) };
  dbinstance.collection("Users").findOne(query, (err, result) => {
    res.render("Users/edit", { users: result });
  });
  // res.end("User Home Page Called..")
});
routes.route("/Edit").post((req, res) => {
  let query = { _id: ObjectId(req.body.id) };
  dbinstance.collection("Users").update(query, {
    $set: {
      Username: req.body.username,
      password: req.body.password,
      age: req.body.age,
      name: req.body.name,
    },
  });
  res.redirect("/Users");
});

routes
  .route("/Create")
  .get((req, res) => {
    res.render("Users/create");
  })
  .post((req, res) => {
    // console.log(req.body);
    let user = {};
    user.Username = req.body.username;
    user.password = req.body.password;
    user.age = req.body.age;
    user.name = req.body.name;
    dbinstance.collection("Users").insertOne(user, (err, result) => {
      if (err) console.log("unable to write data");
      else res.redirect("/Users");
    });
  });

module.exports = routes;
