import { matchedData, validationResult } from 'express-validator';
import { getLoggedInUser } from '../utils/helpers';
import Category from '../models/category';

const createCategory = async (req, res) => {
	try {
		const loggedInUser = getLoggedInUser(req, res);
		const adminId = loggedInUser.userId;

		const result = validationResult(req);
		if (!result.isEmpty()) {
			return res
				.status(400)
				.json({ message: result.array()[0].msg });
		}

		const data = matchedData(req);

		const isSubCategory = data.parentCategoryId;
		if (isSubCategory) {
			const parentCategory = await Category.findById(
				data.parentCategoryId
			);

			if (!parentCategory) {
				return res
					.status(404)
					.json({ message: 'Parent category not found' });
			}
		}

		const newCategory = await Category.create({
			...data,
			userId: adminId,
		});

		return res.status(201).json({
			message: 'Category created successfully',
			category: newCategory,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export { createCategory };
