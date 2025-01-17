import { matchedData, validationResult } from 'express-validator';
import { getLoggedInUser } from '../utils/helpers.js';
import Transaction from '../models/transaction.js';
import Account from '../models/account.js';

const addTransaction = async (req, res) => {
	try {
		const loggedIn = getLoggedInUser(req, res);
		const adminId = loggedIn.userId;

		const results = validationResult(req);
		if (!results.isEmpty()) {
			return res
				.status(400)
				.json({ errors: results.array()[0].msg });
		}

		const data = matchedData(req);
		const account = await Account.findOne({ _id: data.accountId });

		if (!account) {
			return res.status(404).json({ message: 'Invalid account' });
		}

		const newTransaction = await Transaction.create({
			...data,
			userId: adminId,
		});

		return res.status(201).json({
			message: 'Transaction added successfully',
			transaction: newTransaction,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export { addTransaction };
