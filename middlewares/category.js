const createCategoryValidator = {
	name: {
		notEmpty: {
			errorMessage: 'Category name should not be empty',
		},
		isString: {
			errorMessage: 'Category name should be a string',
		},
	},
	parentId: {
		optional: { options: { nullable: true } },
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
		isString: {
			errorMessage: 'Category ID should be a string',
		},
	},
};
