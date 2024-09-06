'use server';

import Message from '@/models/Message';
import connectDB from '@/config/database';
import { getSessionUser } from '@/utils/getSessionUser';

export interface AddMessageResult {
	submitted?: boolean;
	error?: string;
}

export default async function addMessage(
	prevState: AddMessageResult,
	formData: FormData
) {
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
		recipient: recipient as string | null,
		property: formData.get('property') as string | null,
		name: formData.get('name') as string | null,
		email: formData.get('email') as string | null,
		phone: formData.get('phone') as string | null,
		body: formData.get('body') as string | null,
	});

	await newMessage.save();

	return { submitted: true };
}
