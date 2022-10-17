const mongoose = require("mongoose");

const User = new mongoose.Schema({
  firstname:{
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phonenum:String,
  city:String,
  gender1:String,
  gender2:String,
});

module.exports = mongoose.model("User", User);

