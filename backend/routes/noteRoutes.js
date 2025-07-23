import express from 'express';
import { createNote, getNotes } from '../controllers/noteController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getNotes);
router.route('/create').post(protect,createNote);

export default router;
