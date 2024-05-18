import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import axios from 'axios';

const AdminPanel = () => {
  const [refresh, setRefresh] = useState(false);

  const handleProductAdded = () => {
    setRefresh(!refresh);
  };

  const handleEdit = async (product) => {
    const updatedProduct = { ...product, price: product.price + 1 };
    try {
      await axios.put(`/api/products/${product._id}`, updatedProduct);
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <AddProduct onProductAdded={handleProductAdded} />
      <ProductList key={refresh} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default AdminPanel;
