import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Admin',
		required: true,
	},
	name: { type: String, required: true },
	parentCategoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		default: null,
	},
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Category', categorySchema);
