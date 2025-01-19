import express from 'express';
import { checkSchema } from 'express-validator';
import { createCategoryValidator } from '../middlewares/category.js';
import {
	createCategory,
	deleteCategory,
	getCategories,
} from '../controllers/category.js';

const router = express.Router();

router.get('/', getCategories);

router.post(
	'/create',
	checkSchema(createCategoryValidator),
	createCategory
);

router.delete('/:categoryId', deleteCategory);

export default router;
