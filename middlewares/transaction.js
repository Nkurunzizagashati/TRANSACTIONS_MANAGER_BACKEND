const createTransactionValidator = {
	accountId: {
		notEmpty: {
			errorMessage: 'Account ID should not be empty',
		},
		isString: {
			errorMessage: 'Account ID should be a string',
		},
	},
	amount: {
		notEmpty: {
			errorMessage: 'Transaction amount should not be empty',
		},
		isNumeric: {
			errorMessage: 'Transaction amount should be a number',
		},
	},
	type: {
		notEmpty: {
			errorMessage: 'Transaction type should not be empty',
		},
		isIn: {
			options: [['income', 'expense']],
			errorMessage:
				'Transaction type should be either income or expense',
		},
	},
	category: {
		notEmpty: {
			errorMessage: 'Transaction category should not be empty',
		},
		isString: {
			errorMessage: 'Transaction category should be a string',
		},
	},
	description: {
		optional: { options: { nullable: true } },
		isString: {
			errorMessage: 'Description should be a string',
		},
	},
};

const updateTransactionValidator = {
	transactionId: {
		in: ['params'],
		notEmpty: {
			errorMessage: 'Transaction ID should not be empty',
		},
		isString: {
			errorMessage: 'Transaction ID should be a string',
		},
	},
	amount: {
		optional: { options: { nullable: true } },
		isNumeric: {
			errorMessage: 'Updated amount should be a number',
		},
	},
	category: {
		optional: { options: { nullable: true } },
		isString: {
			errorMessage: 'Updated category should be a string',
		},
	},
	description: {
		optional: { options: { nullable: true } },
		isString: {
			errorMessage: 'Updated description should be a string',
		},
	},
};
