const createAccountValidator = {
	bankName: {
		notEmpty: {
			errorMessage: 'Bank name should not be empty',
		},
		isString: {
			errorMessage: 'Bank name should be a string',
		},
	},
	accountType: {
		notEmpty: {
			errorMessage: 'Account type should not be empty',
		},
		isString: {
			errorMessage:
				'Account type should be a string (e.g., Savings, Creadit, Checking, MoMO, Cash)',
		},
	},
	balance: {
		optional: { options: { nullable: true } },
		isNumeric: {
			errorMessage: 'Initial balance should be a number',
		},
	},
};

const updateAccountValidator = {
	bankName: {
		optional: { options: { nullable: true } },
		notEmpty: {
			errorMessage: 'bank name should not be empty',
		},
		isString: {
			errorMessage: 'bank name should be a string',
		},
	},
	accountType: {
		notEmpty: {
			errorMessage: 'Account type should not be empty',
		},
		isString: {
			errorMessage:
				'Account type should be a string (e.g., Savings, Creadit, Checking, MoMO, Cash)',
		},
	},
	accountId: {
		notEmpty: {
			errorMessage: 'Account ID should not be empty',
		},
		isMongoId: {
			errorMessage: 'Account ID should be a valid MongoDB ID',
		},
	},
	balance: {
		optional: { options: { nullable: true } },
		isNumeric: {
			errorMessage: 'Updated balance should be a number',
		},
	},
};

const deleteAccountValidator = {
	accountId: {
		notEmpty: {
			errorMessage: 'Account ID should not be empty',
		},
		isMongoId: {
			errorMessage: 'Account ID should be a valid MongoDB ID',
		},
	},
};

export {
	createAccountValidator,
	updateAccountValidator,
	deleteAccountValidator,
};
