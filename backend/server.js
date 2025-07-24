import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); 

// API routes FIRST
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

//-------------------------------------Deployment-------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname1 = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
    // Serve static files
    app.use(express.static(path.join(__dirname1, '../frontend/build')));
  
    // Handle specific React routes manually
    const reactRoutes = ['/', '/login', '/register', '/notes', '/profile', '/notes/:id'];
    reactRoutes.forEach(route => {
        app.get(route, (req, res) => {
            res.sendFile(path.resolve(__dirname1, '../frontend', 'build', 'index.html'));
        });
    });
    
    // Fallback for any other routes
    app.use((req, res) => {
        res.sendFile(path.resolve(__dirname1, '../frontend', 'build', 'index.html'));
    });
} else {
    // Development mode
    app.get('/', (req, res) => {
        res.send('API is running successfully');
    });
    
    // Error handlers for development
    app.use(notFound);
    app.use(errorHandler);
}

//------------------------------------End Deployment---------------------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));