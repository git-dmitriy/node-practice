const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// admin/${current-route}

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/products', adminController.getProducts);
router.post('/edit-product');

module.exports = router;
