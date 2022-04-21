const { User } = require('../models/User');

//update profile
exports.updateProfile = async (req, res) => {
	const updatedProfile = req.body.updatedProfile;
	try {
		const user = await User.findByIdAndUpdate(
			updatedProfile._id,
			updatedProfile,
		);
		res.status(201).send({
			success: true,
			message: 'Profile Updated Successfully',
			user: user,
		});
	} catch (err) {
		console.log(err);
	}
};
