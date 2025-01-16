import express from 'express';
import { checkSchema } from 'express-validator.js';
import {
	createAccount,
	updateAccount,
} from '../controllers/account.js';

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

export default router;
