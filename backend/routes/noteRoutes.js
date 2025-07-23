import express from 'express';
import { getNotes } from '../controllers/noteController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.route('/').get(protect, getNotes);
// router.route('/create').post((req, res) => {
//     const note = {
//         _id: Date.now().toString(),
//         title: req.body.title,
//         content: req.body.content,
//     };
//     notes.push(note);
//     res.status(201).json(note);
// });
// router.route('/:id').get((req, res) => {
//     const note = notes.find((n) => n._id === req.params.id);
//     if (note) {
//         res.json(note);
//     } else {            
//         res.status(404).json({ message: 'Note not found' });
//     }
// });

export default router;
