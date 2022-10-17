const ItemService = require('../services/items')

function AllItems (req, res) {
    result = ItemService.getItems() //get all the items from the DB
    result.then(r=>{
        res.render("../views/index", { items: r });
    })
}

function GetCart (req, res) {
    result.then(r=>{
        res.render("../views/cart");
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
    result = ItemService.SearchType(req.query.type)
    result.then(r=>{
        res.json(r);
    })
}


function EditItem(req,res)
{
    const { img, name, price, originalname } = req.body
    ItemService.EditItem(img, name, price, originalname)
    res.redirect('/')
}

function DeleteItem(req,res)
{
    const { name } = req.body
    ItemService.DeleteItem(name)
    res.redirect('/')
}

module.exports = { AllItems, SearchItems, SearchType, GetCart, EditItem, DeleteItem };
