import { Document, Model, Schema, model, models } from 'mongoose';

type IUser = Document & {
	email: string;
	username: string;
	image?: string;
	bookmarks: Schema.Types.ObjectId[];
};

const UserSchema = new Schema<IUser>(
	{
		email: {
			type: String,
			unique: true,
			required: [true, 'Email is required'],
		},
		username: {
			type: String,
			required: [true, 'Username is required'],
		},
		image: {
			type: String,
		},
		bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Property' }],
	},
	{ timestamps: true }
);

const User: Model<IUser> = models.User || model<IUser>('User', UserSchema);

export default User;
