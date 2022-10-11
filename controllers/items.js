//const Item = require('../models/items');
const ItemService = require('../services/items')

function index (req, res) {
    console.log(ItemService.getItems())
    result = ItemService.getItems()
    result.then(r=>{
        res.render("../views/items", { items: r });
    })
}

module.exports = { index };