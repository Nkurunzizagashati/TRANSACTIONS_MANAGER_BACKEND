const setBudgetValidator = {
	amount: {
		notEmpty: {
			errorMessage: 'Budget amount should not be empty',
		},
		isNumeric: {
			errorMessage: 'Budget amount should be a number',
		},
	},
};

const updateBudgetValidator = {
	amount: {
		optional: { options: { nullable: true } },
		isNumeric: {
			errorMessage: 'Updated budget amount should be a number',
		},
	},
};
