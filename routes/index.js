import express from 'express';
import adminRouter from './admin.js';

const router = express.Router();

router.use('/admin', adminRouter);

export default router;
