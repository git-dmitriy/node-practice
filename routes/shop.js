const path = require('path');
const express = require('express');
const router = express.Router();

const adminData = require('./admin');
const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
