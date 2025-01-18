const createCategoryValidator = {
	name: {
		notEmpty: {
			errorMessage: 'Category name should not be empty',
		},
		isString: {
			errorMessage: 'Category name should be a string',
		},
	},
	parentCategoryId: {
		optional: { options: { nullable: true } },
		isMongoId: {
			errorMessage:
				'Parent category ID should be a valid MongoDB ID',
		},
		isString: {
			errorMessage: 'Parent category ID should be a string',
		},
	},
};

const updateCategoryValidator = {
	categoryId: {
		in: ['params'],
		notEmpty: {
			errorMessage: 'Category ID should not be empty',
		},
		isMongoId: {
			errorMessage: 'Category ID should be a valid MongoDB ID',
		},
		isString: {
			errorMessage: 'Category ID should be a string',
		},
	},
	name: {
		optional: { options: { nullable: true } },
		notEmpty: {
			errorMessage: 'Category name should not be empty',
		},
		isString: {
			errorMessage: 'Category name should be a string',
		},
	},
};

const deleteCategoryValidator = {
	categoryId: {
		in: ['params'],
		notEmpty: {
			errorMessage: 'Category ID should not be empty',
		},
		isMongoId: {
			errorMessage: 'Category ID should be a valid MongoDB ID',
		},
		isString: {
			errorMessage: 'Category ID should be a string',
		},
	},
};

export {
	createCategoryValidator,
	updateCategoryValidator,
	deleteCategoryValidator,
};
