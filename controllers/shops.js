const ShopService = require('../services/shops')

function GetShops (req, res) {
    result = ShopService.GetShops()
    result.then(r=>{
        res.json(r);
    })
}

function EditShop(req,res)
{
    const { name, address, originalname } = req.body
    ShopService.EditShop(name, address, originalname)
    res.redirect('/')
}

function DeleteShop(req,res)
{
    const { name } = req.body
    ShopService.DeleteShop(name)
    res.redirect('/')
}


module.exports = { GetShops, EditShop, DeleteShop };
