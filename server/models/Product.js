const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, default: '' },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true, default: 0 }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
