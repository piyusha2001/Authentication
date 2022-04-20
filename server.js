require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const connectDB = require('./config/db');

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT} `);
});
