import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Admin',
		required: true,
	},
	accountId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Account',
		required: true,
	},
	amount: { type: Number, required: true },
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
	},
	transactionType: {
		type: String,
		enum: ['Income', 'Expense'],
		required: true,
	},
	description: { type: String },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
