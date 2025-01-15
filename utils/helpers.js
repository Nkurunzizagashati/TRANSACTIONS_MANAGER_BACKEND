import bcrypt from 'bcryptjs';

const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	return hashedPassword;
};

const comparePasswords = async (password, hashedPassword) => {
	const passwordsMatch = await bcrypt.compare(
		password,
		hashedPassword
	);
	return passwordsMatch;
};

const getLoggedInUser = async (req, res) => {
	try {
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

		const user = await Consumer.findOne({
			email: decodedAccessToken.email,
		});

		return { user: user, userId: user._id };
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'Something went wrong' });
	}
};
export { hashPassword, comparePasswords, getLoggedInUser };
