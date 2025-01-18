import { matchedData, validationResult } from 'express-validator';
import { getLoggedInUser } from '../utils/helpers.js';
import Transaction from '../models/transaction.js';
import Account from '../models/account.js';

const addTransaction = async (req, res) => {
	try {
		const loggedIn = await getLoggedInUser(req, res);
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

		if (
			data.transactionType == 'Expense' &&
			account.balance < data.amount
		) {
			return res
				.status(400)
				.json({ message: 'Insufficient balance' });
		}

		if (data.transactionType == 'Income') {
			delete data.categoryId;
		}

		if (data.transactionType == 'Expense' && !data.categoryId) {
			return res.status(400).json({
				message:
					'Please select a category for expense transactions',
			});
		}

		const newTransaction = await Transaction.create({
			...data,
			userId: adminId,
		});

		if (data.transactionType == 'Expense') {
			account.balance -= data.amount;
			await account.save();
		} else {
			account.balance += data.amount;
			await account.save();
		}

		const populatedTransaction = await newTransaction.populate([
			{ path: 'userId', select: '-password' },
			{ path: 'accountId', select: '-balance' },
			{ path: 'categoryId' },
		]);

		return res.status(201).json({
			message: 'Transaction added successfully',
			transaction: populatedTransaction,
		});
	} catch (error) {
		const statusCode = error.message.includes('not authorized')
			? 401
			: 500;

		const errorMessage = error.message.includes('not authorized')
			? error.message
			: 'Something went wrong';

		console.log(error.message);
		return res.status(statusCode).json({ message: errorMessage });
	}
};

const getTransactions = async (req, res) => {
	try {
		const loggedInUser = await getLoggedInUser(req);
		const adminId = loggedInUser.userId;

		const transactions = await Transaction.find({
			userId: adminId,
		}).populate([
			{ path: 'userId', select: '-password' },
			{ path: 'accountId', select: '-balance' },
			{ path: 'categoryId' },
		]);

		return res.status(200).json({ transactions });
	} catch (error) {
		const statusCode = error.message.includes('not authorized')
			? 401
			: 500;

		const errorMessage = error.message.includes('not authorized')
			? error.message
			: 'Something went wrong';
		return res.status(statusCode).json({ message: errorMessage });
	}
};

export { addTransaction, getTransactions };
