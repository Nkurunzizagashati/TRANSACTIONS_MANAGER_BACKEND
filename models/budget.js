import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Admin',
		required: true,
	},
	amount: { type: Number, required: true },
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: false,
	},
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	exceeded: { type: Boolean, default: false },
});

module.exports = mongoose.model('Budget', budgetSchema);
