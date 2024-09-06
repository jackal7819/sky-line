'use server';

import Message from '@/models/Message';
import connectDB from '@/config/database';
import { getSessionUser } from '@/utils/getSessionUser';

export default async function addMessage(formData: FormData) {
	await connectDB();

	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error('User ID is required');
	}

	const { userId } = sessionUser;

	const recipient = formData.get('recipient');

	if (userId === recipient) {
		return { error: 'You cannot send a message to yourself' };
	}

	const newMessage = new Message({
		sender: userId,
		recipient,
		property: formData.get('property'),
		name: formData.get('name'),
		email: formData.get('email'),
		phone: formData.get('phone'),
		body: formData.get('body'),
	});

	await newMessage.save();

	return { submitted: true };
}
