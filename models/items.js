const mongoose = require('mongoose')
const Schema = mongoose.Schema

const item = new Schema({
  id: String,
  name: String,
  price: String,
  type: String,
  img: String
})

module.exports = mongoose.model('item', item)