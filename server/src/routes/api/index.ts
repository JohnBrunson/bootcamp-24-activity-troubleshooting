import feedbackRoutes from './feedbackRoutes.js';
import express from 'express';
import tipRoutes from './tipsRoutes.js'
const router = express.Router();
// tested
router.use ('/tips', tipRoutes)
router.use('/feedback', feedbackRoutes);

export default router;
