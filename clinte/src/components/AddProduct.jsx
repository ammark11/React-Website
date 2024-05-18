import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ onProductAdded }) => {
  const [product, setProduct] = useState({ name: '', price: 0 )});

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name: e.target.value ]});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', product);
      onAdded();
    } catch (error) {
      console.error('Error adding product:', error);
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={product.name} onChange={handleChange} placeholder="Name" />
      <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" />
      <button type="submit">Add Product</button>
    </form>
);};

export default AddProduct;
