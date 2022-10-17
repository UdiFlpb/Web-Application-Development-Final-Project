const shop = require('../models/Shop');
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)

function GetShops() {
    return shop.find()
}

async function EditShop(name, address, originalname)
{
    const filter = {name: originalname}
    const update = {name: name, address: address}
    await shop.findOneAndUpdate(filter, update)
}

async function DeleteShop(name)
{
    const filter = {name: name}
    await shop.deleteOne(filter)
}

module.exports = { GetShops, EditShop, DeleteShop }