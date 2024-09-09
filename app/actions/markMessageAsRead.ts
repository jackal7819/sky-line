'use server';

import Message from '@/models/Message';
import connectDB from '@/config/database';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

export default async function markMessageAsRead(messageId: string) {
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
}
