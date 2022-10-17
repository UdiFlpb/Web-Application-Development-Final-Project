const express = require('express');
const { GetShops, EditShop, DeleteShop } = require('../controllers/shops');

const router = express.Router();

router.get('/shops', GetShops); 

router.post('/editshop', EditShop)

router.post('/deleteshop', DeleteShop)


module.exports = router;