const createAccountValidator = {
	name: {
		notEmpty: {
			errorMessage: 'Account name should not be empty',
		},
		isString: {
			errorMessage: 'Account name should be a string',
		},
	},
	type: {
		notEmpty: {
			errorMessage: 'Account type should not be empty',
		},
		isString: {
			errorMessage:
				'Account type should be a string (e.g., bank, cash, mobile money)',
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
	name: {
		optional: { options: { nullable: true } },
		notEmpty: {
			errorMessage: 'Account name should not be empty',
		},
		isString: {
			errorMessage: 'Account name should be a string',
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
		in: ['params'],
		notEmpty: {
			errorMessage:
				'You need to provide an ID for the account you want to delete',
		},
		isString: {
			errorMessage: 'Account ID should be a string',
		},
	},
};
