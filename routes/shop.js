const express = require('express');
const shopController = require('../controllers/shop');
const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/product-list', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);
// router.get('/product-detail', shopController);

module.exports = router;
