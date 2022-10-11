const ItemService = require('../services/items')

function AllItems (req, res) {
    result = ItemService.getItems()
    result.then(r=>{
        res.render("../views/items", { items: r });
    })
}

function SearchItems (req, res)
{
    result = ItemService.searchItems(req.query.search)
    result.then(r=>{
        res.render("../views/items", { items: r });
    })
}

module.exports = { AllItems, SearchItems };