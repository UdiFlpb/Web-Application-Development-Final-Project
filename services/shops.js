const item = require('../models/Shop');
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)

function GetShops() {
    return item.find()
}

module.exports = { GetShops }