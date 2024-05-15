const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const new product = new Product(req.body);
        await new product.save();
        res.send(new product);
    } catch (err) {
        res.status(500).send(err);
    }
});
module.exports = router;