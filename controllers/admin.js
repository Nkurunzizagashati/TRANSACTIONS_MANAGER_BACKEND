import { matchedData, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import Admin from '../models/admin.js';
import { comparePasswords, hashPassword } from '../utils/helpers.js';
import { generateJWTauthToken } from '../utils/authTokens.js';

const registerAdmin = async (req, res) => {
	try {
		const result = validationResult(req);
		if (!result.isEmpty()) {
			return res
				.status(400)
				.json({ message: result.array()[0].msg });
		}

		const data = matchedData(req);

		if (data.password != data.confirmPassword) {
			return res.status(400).json({
				message:
					'Password and Confirm Password should be the same.',
			});
		}

		const existingAdmin = await Admin.findOne({
			email: data.email,
		});

		if (existingAdmin) {
			return res.status(401).json({
				message: 'Email already registered',
			});
		}

		const hashedPassword = await hashPassword(data.password);
		data.password = hashedPassword;

		// REGISTER THE ADMIN

		const newAdmin = await Admin.create(data);

		// GENERATE TOKENS

		const accessToken = generateJWTauthToken({
			email: newAdmin.email,
		});

		const adminData = newAdmin.toObject();
		delete adminData.password;

		return res.status(201).json({
			message: 'Admin registered successfully',
			token: accessToken,
			user: adminData,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const loginAdmin = async (req, res) => {
	try {
		const result = validationResult(req);
		if (!result.isEmpty()) {
			return res
				.status(400)
				.json({ message: result.array()[0].msg });
		}

		const data = matchedData(req);
		const existingAdmin = await Admin.findOne({
			email: data.email,
		});
		if (!existingAdmin) {
			return res
				.status(401)
				.json({ message: 'Invalid credentials' });
		}

		const password = data.password;

		const passwordMatches = await comparePasswords(
			password,
			existingAdmin.password
		);

		console.log(passwordMatches);

		if (!passwordMatches) {
			return res
				.status(401)
				.json({ message: 'Invalid credentials' });
		}

		const accessToken = generateJWTauthToken({
			email: existingAdmin.email,
		});

		const adminData = existingAdmin.toObject();
		delete adminData.password;

		return res.status(200).json({
			message: 'Logged in successfully!',
			user: adminData,
			accessToken,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateAdmin = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export { registerAdmin, loginAdmin, updateAdmin };
