const path = require('path');
const express = require('express');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // res.render('shop', { prods: products, pageTitle: 'Shop', path: '/'});
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    hasProducts: products.length > 0,
    path: '/',
  });
});

module.exports = router;
