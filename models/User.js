const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
			min: 5,
			max: 10,
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
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		return next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});
module.exports = mongoose.model('User', userSchema);
