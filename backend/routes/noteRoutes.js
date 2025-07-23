import express from 'express';
import { createNote, getNotes, getNotesById, updateNote } from '../controllers/noteController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getNotes);
router.route('/create').post(protect, createNote);
router.route('/:id').get(protect, getNotesById).put(protect, updateNote);  //tampering the data by the user, so need to be protected

export default router;
