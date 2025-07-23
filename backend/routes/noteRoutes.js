import express from 'express';
import { createNote, getNotes, getNotesById } from '../controllers/noteController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getNotes);
router.route('/create').post(protect, createNote);
router.route('/:id').get(protect, getNotesById); // Assuming you want to get a specific note by ID

export default router;
