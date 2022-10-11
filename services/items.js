const item = require('../models/items');
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MongoConnectionString)

function getItems() {
    return item.find()
}

function searchItems(search) {
    return item.find({name:  { "$regex": search, "$options": "i" }})
}

module.exports = { getItems, searchItems }