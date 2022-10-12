const express = require('express');
const { AllItems, SearchItems, SearchType} = require('../controllers/items');

const router = express.Router();

router.get('/items', AllItems);

router.get('/search', SearchItems);

router.get('/type', SearchType);

module.exports = router;