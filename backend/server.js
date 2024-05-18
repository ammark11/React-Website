import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import itemsRouter from './routes/items.js';
import contactRouter from './routes/contact.js'; // Add this line

dotenv.config();

const DBCONNECT_STRING = process.env.MONGO_URI || "mongodb+srv://Admin:Admin@cluster0.zd2qo0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 5000;
const app = express();

// This part replaces __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/items', itemsRouter);
app.use('/api/contact', contactRouter); // Add this line

mongoose.connect(DBCONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB successfully!'))
    .catch((err) => console.error('Error connecting to DB:', err));

app.get('/', (req, res) => {
    res.send('Hello from React-Website backend!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
