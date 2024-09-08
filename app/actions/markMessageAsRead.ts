'use server';

import Message from '@/models/Message';
import connectDB from '@/config/database';
// import { Types } from 'mongoose';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

// interface MarkStatus {
// 	read: boolean;
// }

export default async function markMessageAsRead(
	messageId: string
) {
	await connectDB();

	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error('User ID is required');
	}

	const { userId } = sessionUser;

	const message = await Message.findById(messageId);

	if (!message) {
		throw new Error('Message not found');
	}

	//verify if user is the sender
	if (message.recipient.toString() !== userId) {
		throw new Error('You are not authorized');
	}

	message.read = !message.read;

	revalidatePath('/messages', 'page');

	await message.save();

	return message.read;

	// const user = await User.findById(userId);

	// if (!user) {
	// 	throw new Error('User not found');
	// }

	// const propertyObjectId =
	// 	typeof propertyId === 'string'
	// 		? new Types.ObjectId(propertyId)
	// 		: propertyId;

	// Type assertion to ensure TypeScript recognizes it as a Mongoose array
	// const bookmarks = user.bookmarks as unknown as Types.Array<Types.ObjectId>;

	// const isBookmarked = bookmarks.includes(propertyObjectId);

	// return { isBookmarked };
}
