import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
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

    const addToCart = (id) => {
        setCartItems((prevItems) => ({
            ...prevItems,
            [id]: (prevItems[id] || 0) + 1,
        }));
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => {
            const newItems = { ...prevItems };
            if (newItems[id] > 0) {
                newItems[id] -= 1;
            }
            return newItems;
        });
    };

    return (
        <ShopContext.Provider value={{ addToCart, removeFromCart, cartItems, items }}>
            {children}
        </ShopContext.Provider>
    );
};
