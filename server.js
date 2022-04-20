require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT} `);
});

process.on('unhandledRejection', (err) => {
	console.log(`Error: ${err.message}`);
	// Close server & exit process
	server.close(() => process.exit(1));
});
