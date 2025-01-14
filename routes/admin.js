import express from 'express';
import {
	loginAdmin,
	registerAdmin,
	updateAdmin,
} from '../controllers/admin.js';
import { checkSchema } from 'express-validator';
import {
	loginAdminValidator,
	registerAdminValidator,
	updateAdminValidator,
} from '../middlewares/admin.js';

const router = express.Router();

router.post(
	'/register',
	checkSchema(registerAdminValidator),
	registerAdmin
);

router.post('/login', checkSchema(loginAdminValidator), loginAdmin);

router.put('/update', checkSchema(updateAdminValidator), updateAdmin);

export default router;
