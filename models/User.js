const mongoose = require("mongoose");

const User = new mongoose.Schema({
  FirstName:{
    type: String,
    required: true,
  },
  LastName:{
    type: String,
    required: true,
  },
  _id:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber:String,
  city:String,
  gender:String
  

});

module.exports = mongoose.model("User", User);

