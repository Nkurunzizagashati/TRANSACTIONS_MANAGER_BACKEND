import { matchedData, validationResult } from 'express-validator';
import { getLoggedInUser } from '../utils/helpers.js';
import Category from '../models/category.js';

const createCategory = async (req, res) => {
	try {
		const loggedInUser = await getLoggedInUser(req);
		const adminId = loggedInUser.userId;

		const result = validationResult(req);
		if (!result.isEmpty()) {
			return res
				.status(400)
				.json({ message: result.array()[0].msg });
		}

		const data = matchedData(req);

		if (data.parentCategoryId) {
			const parentCategory = await Category.findById(
				data.parentCategoryId
			);
			if (!parentCategory) {
				return res
					.status(404)
					.json({ message: 'Parent category not found' });
			}
		}

		const categoryExists = await Category.findOne({
			name: data.name,
			userId: adminId,
			parentCategoryId: data.parentCategoryId || null,
		});

		if (categoryExists) {
			return res.status(400).json({
				message: 'Category with the same name already exists',
			});
		}

		const newCategory = await Category.create({
			...data,
			userId: adminId,
		});

		return res.status(201).json({
			message: 'Category created successfully',
			category: await newCategory.populate([
				{ path: 'userId', select: '-password' },
				{ path: 'parentCategoryId' },
			]),
		});
	} catch (error) {
		const statusCode = error.message.includes('not authorized')
			? 401
			: 500;
		return res.status(statusCode).json({ message: error.message });
	}
};

const getCategories = async (req, res) => {
	try {
		const loggedInUser = await getLoggedInUser(req, res);
		const categories = await Category.find({
			userId: loggedInUser.userId,
		}).populate([
			{ path: 'userId', select: '-password' },
			{ path: 'parentCategoryId' },
		]);
		return res.status(200).json({ categories });
	} catch (error) {
		const statusCode = error.message.includes('not authorized')
			? 401
			: 500;
		return res.status(statusCode).json({ message: error.message });
	}
};

export { createCategory, getCategories };
