import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './product';
import './shop.css'; // Ensure this imports your styles

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/items');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    return (
        <div className="shop">
            <h1>Shop</h1>
            <div className="product-list">
                {items.map(item => (
                    <Product key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
