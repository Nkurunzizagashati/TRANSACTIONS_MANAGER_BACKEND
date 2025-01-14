import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({ message: 'get the admin account' });
});

router.post('/register', (req, res) => {
	res.status(201).json({ message: 'registering an admin' });
});

router.post('/login', (req, res) => {
	res.status(200).json({ message: 'logging in admin' });
});

export default router;
