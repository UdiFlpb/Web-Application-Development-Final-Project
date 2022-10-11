// const items = [
//     { id : 1, name : "Hello", price : "world", type : 'type1' , img : 'images/dairy product/butter.png'},
//     { id : 2, name : "Hello2", price : "world2", type : 'type2', img : 'images/dairy product/butter.png'},
//     { id : 3, name : "Hello3", price : "world3" , type : 'type3', img : 'images/dairy product/butter.png'}
//   ];
  
// exports.getItems = () => {
//     return items;
// }

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