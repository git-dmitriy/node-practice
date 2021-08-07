const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  console.log('🚀 ~ file: admin.js ~ line 15 ~ products', products);
  console.log(req.body);
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
