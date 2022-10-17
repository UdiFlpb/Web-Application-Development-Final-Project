const mongoose = require("mongoose");

const User = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phonenum: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  admin: {
    type: Boolean,
    required: true
  }

});

module.exports = mongoose.model("User", User);

