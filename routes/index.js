import express from 'express';
import adminRouter from './admin.js';
import accountRouter from './account.js';
import categoryRouter from './category.js';

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/account', accountRouter);
router.use('/category', categoryRouter);

export default router;
