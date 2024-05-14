const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/', async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stockQuantity: req.body.stockQuantity
    });
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (err) {
    res.status(500).send({ error: 'Error creating product' });
  }
});

// More CRUD endpoints here

module.exports = router;
