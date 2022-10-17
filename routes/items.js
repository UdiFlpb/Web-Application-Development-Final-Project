const express = require('express');
const { AllItems, SearchItems, SearchType, GetCart, EditItem, DeleteItem} = require('../controllers/items');

const router = express.Router();

router.get('/index', AllItems);

router.get('/getcart', function(req, res, next) {
    res.render("../views/cart");
 });

router.get('/search', SearchItems);

router.get('/type', SearchType);

router.post('/edititem', EditItem)

router.post('/deleteitem', DeleteItem)

module.exports = router;