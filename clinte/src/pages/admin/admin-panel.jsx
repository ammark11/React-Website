import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [picture, setPicture] = useState(null);
    const [editingItem, setEditingItem] = useState(null);

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

    const createItem = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        if (picture) {
            formData.append('picture', picture);
        }

        try {
            await axios.post('http://localhost:5000/api/items', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setName('');
            setPrice('');
            setPicture(null);
            fetchItems();
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    const updateItem = async (id) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        if (picture) {
            formData.append('picture', picture);
        }

        try {
            await axios.put(`http://localhost:5000/api/items/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setName('');
            setPrice('');
            setPicture(null);
            setEditingItem(null);
            fetchItems();
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/items/${id}`);
            fetchItems();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingItem) {
            updateItem(editingItem);
        } else {
            createItem();
        }
    };

    const handleEdit = (item) => {
        setName(item.name);
        setPrice(item.price);
        setEditingItem(item._id);
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setPicture(e.target.files[0])}
                />
                <button type="submit">
                    {editingItem ? 'Update Item' : 'Create Item'}
                </button>
            </form>
            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        <img src={`http://localhost:5000/uploads/${item.picture}`} alt={item.name} style={{ width: '100px' }} />
                        {item.name}: ${item.price}
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => deleteItem(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
