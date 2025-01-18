import express from 'express';
import adminRouter from './admin.js';
import accountRouter from './account.js';
import categoryRouter from './category.js';
import transactionRouter from './transaction.js';

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/account', accountRouter);
router.use('/category', categoryRouter);
router.use('/transaction', transactionRouter);

export default router;
