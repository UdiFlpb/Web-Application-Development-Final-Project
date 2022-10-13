const User = require("../models/User");

async function login(username, password) {
    const user = await User.findOne({ _id: username, password });
    return user != null
}

async function register(username, password, FirstName, LastName,Adress, Gender) {

    const user = new User({
        _id: username,
        password,
        FirstName,
        LastName,
        Adress,
        Gender
    });

    await user.save()        
}

module.exports = { login, register }