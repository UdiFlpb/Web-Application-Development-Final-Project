const express = require('express');
const { AllItems, SearchItems } = require('../controllers/items');

const router = express.Router();

router.get('/items', AllItems);

router.get('/search', SearchItems)

module.exports = router;