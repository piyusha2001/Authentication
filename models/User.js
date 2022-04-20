const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
			min: 3,
			max: 20,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
			min: 3,
			max: 20,
		},
		userName: {
			type: String,
			required: [true, 'Provide an username'],
		},
		email: {
			type: String,
			required: [true, 'Provied an email address'],
			unique: true,
			match: [
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
				'Please fill a valid email address',
			],
		},
		password: {
			type: String,
			required: [true, 'Provide a password'],
			minlength: 6,
			select: false,
		},
		contactNumber: { type: String },
		pofilePicture: { type: String },
	},
	{ timestamps: true },
);
