const User = require('../models/user');

exports.register = async (req, res, next) => {
	const { firstName, lastName, userName, email, password } = req.body;
	try {
		const user = await User.create({
			firstName,
			lastName,
			userName,
			email,
			password,
		});
		res.status(201).json({
			message: 'User created successfully',
			userId: user._id,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: err.message,
		});
	}
};

exports.login = (req, res, next) => {
	res.send('Login route');
};
