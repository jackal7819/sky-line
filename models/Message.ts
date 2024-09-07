import { Document, Model, Schema, model, models } from 'mongoose';

interface ISender {
	_id: Schema.Types.ObjectId;
	username: string;
}

interface IProperty {
	_id: Schema.Types.ObjectId;
	username: string;
}

export interface IMessage extends Document {
	_id: Schema.Types.ObjectId;
	sender: ISender;
	recipient: Schema.Types.ObjectId;
	property: IProperty;
	name: string;
	email: string;
	phone?: string;
	body: string;
	read: boolean;
	createdAt: Date;
	updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>(
	{
		sender: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		recipient: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		property: {
			type: Schema.Types.ObjectId,
			ref: 'Property',
			required: true,
		},
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
		},
		phone: String,
		body: String,
		read: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Message: Model<IMessage> =
	models.Message || model<IMessage>('Message', MessageSchema);

export default Message;
