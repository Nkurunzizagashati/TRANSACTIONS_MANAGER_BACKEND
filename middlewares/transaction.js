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
	transactionType: {
		notEmpty: {
			errorMessage: 'Transaction type should not be empty',
		},
		isIn: {
			options: [['Income', 'Expense']],
			errorMessage:
				'Transaction type should be either Income or Expense',
		},
	},
	categoryId: {
		optional: { options: { nullable: true } },
		isMongoId: {
			errorMessage: 'Category id should be a valid Mongo ID',
		},
	},
	description: {
		optional: { options: { nullable: true } },
		isString: {
			errorMessage: 'Description should be a string',
		},
	},
	date: {
		optional: { options: { nullable: true } },
		isDate: {
			errorMessage: 'Date should be a valid date',
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

export { createTransactionValidator, updateTransactionValidator };
