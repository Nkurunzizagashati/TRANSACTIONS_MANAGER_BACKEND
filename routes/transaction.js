import express from 'express';
import {
	addTransaction,
	getTransactions,
} from '../controllers/transaction.js';
import { checkSchema } from 'express-validator';
import { createTransactionValidator } from '../middlewares/transaction.js';

const router = express.Router();

router.get('/', getTransactions);
router.post(
	'/create',
	checkSchema(createTransactionValidator),
	addTransaction
);

export default router;
