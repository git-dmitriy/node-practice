const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      hasProducts: products.length > 0,
      path: '/products',
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render('shop/product-detail', {
      product,
      pageTitle: product.title,
      path: '/products',
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Main Page',
      hasProducts: products.length > 0,
      path: '/',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your cart',
    path: '/cart',
  });
};

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;
  console.log('🚀 ~ file: shop.js ~ line 45 ~ productId', productId);
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your orders',
    path: '/orders',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('/shop/checkout', {
    pageTitle: 'Checkout',
    path: '/controllers',
  });
};
