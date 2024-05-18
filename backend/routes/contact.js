import express from 'express';
import Contact from '../models/contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    
    const newContact = new Contact({ name, email, message });

    try {
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
