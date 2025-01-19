import { matchedData, validationResult } from 'express-validator';
import Admin from '../models/admin.js';
import Account from '../models/account.js';
import { getLoggedInUser } from '../utils/helpers.js';

const createAccount = async (req, res) => {
	try {
		const result = validationResult(req);
		if (!result.isEmpty()) {
			return res
				.status(400)
				.json({ errors: result.array()[0].msg });
		}

		const data = matchedData(req);

		const loggedInUser = await getLoggedInUser(req);

		const accountAlreadyExists = await Account.findOne({
			userId: loggedInUser.userId,
			bankName: data.bankName,
			accountType: data.accountType,
		});

		if (accountAlreadyExists) {
			return res
				.status(400)
				.json({ message: 'Account already exists' });
		}

		const createdAccount = await Account.create({
			...data,
			userId: loggedInUser.userId,
		});

		const populatedAccount = await createdAccount.populate({
			path: 'userId',
			select: '-password',
		});

		res.status(201).json({
			message: 'Account created successfully',
			account: populatedAccount,
		});
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

const getAccounts = async (req, res) => {
	try {
		const loggedInUser = await getLoggedInUser(req);

		const adminId = loggedInUser.userId;
		const accounts = await Account.find({
			userId: adminId,
		}).populate({ path: 'userId', select: '-password' });

		return res.status(200).json({ accounts });
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

const updateAccount = async (req, res) => {
	try {
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
export { createAccount, updateAccount, getAccounts };
