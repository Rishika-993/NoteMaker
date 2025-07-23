import express from 'express';
import notes from './data/notes.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('API is running...');
});

// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// });

// app.get('/api/notes/:id', (req, res) => {
//     const note = notes.find((n) => n._id === req.params.id);
//     res.send(note);
// });
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));