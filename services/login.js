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

async function register(firstname, lastname, username, password, phonenum, city, gender1, gender2) {

    const user = new User({
        firstname: firstname,
        lastname: lastname,
        username: username,
        password:password,
        phonenum: phonenum,
        city: city,
        gender1: gender1,
        gender2: gender2
    });

    await user.save()
}
//checking if the password is ok
 function checkPwd(password) {
    if (password.length < 4) {
        return ("too_short");
    } else if (password.length > 6) {
        return ("too_long");
    } else if (str.search(/\d/) == -1) {
        return ("no_num");
    } else if (str.search(/[a-zA-Z]/) != -1) {
        return ("dont enter letter");
    } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
        return ("bad_char");
    }
    return ("ok");
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
    return valid;
}
function IsNameValied(firstname) {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = (firstname.value);
    if (!regName.test(name)) {
        alert('Invalid name given.');
    } else {
        alert('Valid name given.');
    }
}

module.exports = { login, register }