import React, { useState } from 'react';
import { PRODUCTS } from '../../products';
import './admin-panel.css';

const AdminPanel = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    price: '',
    productImage: '',
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    productName: '',
    price: '',
    productImage: '',
  });

  const handleAddProduct = () => {
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { ...newProduct, id: newId }]);
    setNewProduct({ productName: '', price: '', productImage: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdateProduct = () => {
    if (selectedProduct) {
      setProducts(
        products.map((product) =>
          product.id === selectedProduct.id
            ? { ...product, ...updatedProduct }
            : product
        )
      );
      setSelectedProduct(null);
      setUpdatedProduct({ productName: '', price: '', productImage: '' });
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setUpdatedProduct({
      productName: product.productName,
      price: product.price,
      productImage: product.productImage,
    });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.productImage} alt={product.productName} />
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            <button onClick={() => handleSelectProduct(product)}>Edit</button>
          </div>
        ))}
      </div>
      <div className="add-product">
        <h2>Add New Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.productName}
          onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.productImage}
          onChange={(e) => setNewProduct({ ...newProduct, productImage: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      {selectedProduct && (
        <div className="update-product">
          <h2>Update Product</h2>
          <input
            type="text"
            placeholder="Product Name"
            value={updatedProduct.productName}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, productName: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={updatedProduct.price}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={updatedProduct.productImage}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, productImage: e.target.value })}
          />
          <button onClick={handleUpdateProduct}>Update Product</button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
