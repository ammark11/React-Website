import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/items');
                setItems(response.data);
            } catch (error) {
                console.error('There was an error fetching the items!', error);
            }
        };

        fetchItems();
    }, []);

    return (
        <div>
            <h1>Items List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        {item.name}: {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemsList;
