// src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD Produtos
router.post('/products', productController.create);
router.get('/products', productController.getAll);
router.get('/products/:id', productController.getById);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);

module.exports = router;
