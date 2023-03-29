const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  //   mobile: {
  //     type: Number,
  //     required: true,
  //     unique: true,
  //   },
});

module.exports = mongoose.model("User", userModel);
//User is a name of Collection
