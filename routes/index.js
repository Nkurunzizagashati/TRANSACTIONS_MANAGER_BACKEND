import express from 'express';
import adminRouter from './admin.js';
import accountRouter from './account.js';

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/account', accountRouter);

export default router;
