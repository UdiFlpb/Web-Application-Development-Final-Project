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

async function EditItem(img, name, price, originalname)
{
    const filter = {name: originalname}
    const update = {img: img, name: name, price: price}
    await item.findOneAndUpdate(filter, update);
}

async function DeleteItem(name)
{
    const filter = {name: name}
    await item.deleteOne(filter)
}

module.exports = { getItems, searchItems, SearchType, EditItem, DeleteItem}