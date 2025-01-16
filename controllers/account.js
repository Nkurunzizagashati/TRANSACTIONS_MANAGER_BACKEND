import { matchedData, validationResult } from 'express-validator';
import Admin from '../models/admin';
import Account from '../models/account';

const createAccount = async (req, res) => {
	try {
		const result = validationResult(req);
		if (!result.isEmpty()) {
			return res
				.status(400)
				.json({ errors: result.array()[0].msg });
		}

		const data = matchedData(req);

		const authHeader = req.headers.authorization;
		let accessToken =
			authHeader && authHeader.startsWith('Bearer ')
				? authHeader.split(' ')[1]
				: null;

		if (!accessToken)
			return res.status(401).json({ message: 'Not authorized' });

		const decodedAccessToken = jwt.verify(
			accessToken,
			process.env.JWT_SECRET
		);

		if (!decodedAccessToken) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		const user = await Admin.findOne({
			email: decodedAccessToken.email,
		});

		if (!user) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		const createdAccount = await Account.create({
			...data,
			userId: user._id,
		});

		res.status(201).json({
			message: 'Account created successfully',
			account: createdAccount,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getAccounts = async (req, res) => {
	try {
		const loggedInUser = getLoggedInUser();
		if (!loggedInUser) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		const adminId = loggedInUser.userId;
		const accounts = await Account.find({ userId: adminId });

		if (accounts.length == 0) {
			return res.status(200).json({
				message:
					'No account found for this user, consider creating one',
			});
		}

		res.status(200).json({ accounts });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateAccount = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
export { createAccount, updateAccount, getAccounts };
