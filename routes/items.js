const express = require('express');
const { AllItems, SearchItems, SearchType, EditItem, DeleteItem} = require('../controllers/items');

const router = express.Router();

router.get('/index', AllItems);

router.get('/search', SearchItems);

router.get('/type', SearchType);

router.post('/edititem', EditItem)

router.post('/deleteitem', DeleteItem)

module.exports = router;