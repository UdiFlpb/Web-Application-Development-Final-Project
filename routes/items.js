const express = require('express');
const { index } = require('../controllers/items');
const router = express.Router();

router.get('/items', index);

module.exports = router;