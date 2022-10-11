const item = require('../models/items');
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://GroupUser:q1w2e3r4@cluster0.6evmk63.mongodb.net/DB')

function getItems() {
    return item.find()
}

module.exports = { getItems }