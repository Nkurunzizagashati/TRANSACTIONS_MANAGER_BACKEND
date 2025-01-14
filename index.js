import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import createDBConnection from './utils/db.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
	cors({
		origin: ['http://localhost:5173'],
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	})
);

app.use('/api', routes);

// Connect to the Database

createDBConnection();

const PORT = process.env.PORT || 3001;

try {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
} catch (error) {
	console.error(
		`ERROR OCCURED WHILE INITIALIZING THE SERVER CONNECTION: ${error.message}`
	);
	process.exit(1);
}
