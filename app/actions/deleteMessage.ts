'use server';

import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

export default async function deleteMessage(messageId: string) {
	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error('User ID is required');
	}

	const { userId } = sessionUser;

	const message = await Message.findById(messageId);

	if (message?.recipient.toString() !== userId) {
		throw new Error('You are not authorized');
	}

	await message.deleteOne();
	revalidatePath('/', 'layout');
}
