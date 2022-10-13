const User = require("../models/User");
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)

async function login(username, password) {
    const user = await User.findOne({
         _id: username,
          password
         });
    return user != null
}

async function register(username, password, FirstName, LastName, PhoneNumber, Gender) {

    const user = new User({
        _id: username,
        pass:password,
        first: FirstName,
        last:LastName,
        phone:PhoneNumber,
        gender:Gender
    });

    await user.save()        
}

module.exports = { login, register }