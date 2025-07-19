import express from 'express';
import notes from './data/notes.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));