import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Admin',
		required: true,
	},
	bankName: { type: String, required: true },
	accountType: {
		type: String,
		enum: ['Checking', 'Saving', 'Credit', 'MoMo', 'Cash'],
		required: true,
	},
	balance: { type: Number, default: 0 },
	createdAt: { type: Date, default: Date.now },
});

const Account = mongoose.model('Account', accountSchema);

export default Account;
