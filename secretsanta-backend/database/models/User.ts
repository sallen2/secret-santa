import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	first: { type: String },
	last: { type: String },
	email: { type: String },
	item: { type: String }
});

export default model('User', UserSchema);
