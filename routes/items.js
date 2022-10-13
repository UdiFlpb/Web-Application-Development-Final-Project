const express = require('express');
const { AllItems, SearchItems, SearchType} = require('../controllers/items');

const router = express.Router();

router.get('/index', AllItems);

router.get('/search', SearchItems);

router.get('/type', SearchType);

module.exports = router;