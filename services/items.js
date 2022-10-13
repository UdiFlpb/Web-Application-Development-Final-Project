const item = require('../models/items');
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)

function getItems() {
    return item.find()
}

function searchItems(search) {
    return item.find({name:  { "$regex": search, "$options": "i" }})
}

function SearchType(type) {
    return item.find({type:  { "$regex": type, "$options": "i" }})
}

module.exports = { getItems, searchItems, SearchType}