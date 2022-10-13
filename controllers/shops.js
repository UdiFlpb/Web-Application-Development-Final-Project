const ShopService = require('../services/shops')

function GetShops (req, res) {
    result = ShopService.GetShops()
    result.then(r=>{
        res.json(r);
    })
}


module.exports = { GetShops };
