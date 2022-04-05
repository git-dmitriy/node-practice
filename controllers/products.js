const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add product',
    activeAddProduct: true,
    path: '/admin/add-product',
    formsCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    hasProducts: products.length > 0,
    path: '/',
    activeShops: true,
    productCSS: true,
  });
};
