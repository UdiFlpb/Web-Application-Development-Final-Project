const express = require('express');
const { GetShops } = require('../controllers/shops');

const router = express.Router();

router.get('/shops', GetShops);


module.exports = router;