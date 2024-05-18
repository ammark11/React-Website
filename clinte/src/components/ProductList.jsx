import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ onEdit, onDelete }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product._id}>
          {product.name} - ${{product.price}}
          <button onClick={@onEdit(product)}>Edit</button>
          <button onClick={() => onDelete(product._id)}>Delete</button>
        </div>))
      })
    </div>
);};

export default ProductList;
