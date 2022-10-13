const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shop = new Schema({
  id: String,
  name: String,
  address: String,
})

module.exports = mongoose.model('shop', shop)