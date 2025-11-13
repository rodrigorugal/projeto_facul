// src/routes/index.js
const express = require('express');
const router = express.Router();

const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');

router.use(productRoutes);
router.use(userRoutes);

module.exports = router;
