import express from 'express';
import { checkSchema } from 'express-validator';
import {
	createAccount,
	getAccounts,
	updateAccount,
} from '../controllers/account.js';
import {
	createAccountValidator,
	updateAccountValidator,
} from '../middlewares/account.js';

const router = express.Router();

router.post(
	'/create',
	checkSchema(createAccountValidator),
	createAccount
);

router.put(
	'update',
	checkSchema(updateAccountValidator),
	updateAccount
);

router.get('/', getAccounts);

export default router;
