const User = require("../models/User");
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)

async function login(username, password) {
    const user = await User.findOne({
        username: username,
        password: password
    });
    return user != null
}

async function register(firstname, lastname, username, password, phonenum, city, admin) {

    const user = new User({
        firstname: firstname,
        lastname: lastname,
        username: username,
        password:password,
        phonenum: phonenum,
        city: city,
        admin: admin
    });

    await user.save()
}
//checking if the password is ok
 function checkPwd(password) {
    if (password.length < 4) {
        return false;
    } else if (password.length > 6) {
        return false;
    } else if (str.search(/\d/) == -1) {
        return false;
    } else if (str.search(/[a-zA-Z]/) != -1) {
        return false;
    } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
        return false;
    }
    return true;
}

//valedation for username
function isUserNameValid(username) {
    /* 
      Usernames can only have: 
      - Lowercase Letters (a-z) 
      - Numbers (0-9)
      - Dots (.)
      - Underscores (_)
    */
    const res = /^[a-z0-9_\.]+$/.exec(username);
    const valid = !!res;
    return true;
}
// this fanction check if the name is valied
function IsNameValied(firstname) {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = (firstname.value);
    if (!regName.test(name)) {
        return false;
    } else {
        return true;
    }
}

//this function receives a username and checks in the db if he is an admin
async function IsAdmin(username)
{
    const user = await User.findOne({
        username: username,
    });

    //check if user is not null
    if(user)
    {
        return user.admin
    }

    //if user is null return false automatically
    return false
}

module.exports = { login, register, IsAdmin,checkPwd ,isUserNameValid}