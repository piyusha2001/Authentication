const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');
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
			userId: user,
		});
	} catch (err) {
		next(error);
	}
};

exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(
			new ErrorResponse('Please provide email and password', 400),
		);
	}
	try {
		const user = await User.findOne({ email }).select('+password');
		if (!user) {
			return next(new ErrorResponse('Invalid credentials', 401));
		}
		const isMatch = await user.matchPasswords(password);
		if (!isMatch) {
			return next(new ErrorResponse('Invalid credentials', 401));
		}
		res.status(200).json({
			success: true,
			token: 'regtrgb',
			message: 'User logged in successfully',
		});
	} catch (err) {
		next(error);
	}
};
