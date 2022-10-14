const User = require("../models/User");
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)

async function login(username, password) {
    const user = await User.findOne({
         username: username,
        password:password
         });
    return user != null
}

async function register(firstname,lastname,username, password,phonenum,city,gender1, gender2) {

    const user = new User({
       firstname:firstname,
       lastname:lastname,
       username:username,
       password:password,
       phonenum:phonenum,
       city:city,
       gender1:gender1,
       gender2:gender2
    });

    await user.save()        
}

module.exports = { login, register }