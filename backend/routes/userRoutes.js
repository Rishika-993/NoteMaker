import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { authUser, registerUser, updateUserProfile } from '../controllers/userControllers.js';

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').post(protect, updateUserProfile); 

export default router;