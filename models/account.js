import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Admin',
		required: true,
	},
	accountName: { type: String, required: true },
	accountType: {
		type: String,
		enum: ['Bank', 'Mobile Money', 'Cash'],
		required: true,
	},
	balance: { type: Number, default: 0 },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Account', accountSchema);
