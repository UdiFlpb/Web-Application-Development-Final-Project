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
        res.json(r);
    })
}

function SearchType (req, res)
{
    console.log("entered the controller")
    result = ItemService.SearchType(req.query.type)
    result.then(r=>{
        res.json(r);
    })
}

module.exports = { AllItems, SearchItems, SearchType };