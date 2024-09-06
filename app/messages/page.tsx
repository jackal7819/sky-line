import Message from '@/models/Message';
import MessageCard from '@/components/MessageCard'
import connectDB from '@/config/database';
import convertToObject from '@/utils/convertToObject';
import { getSessionUser } from '@/utils/getSessionUser';

export default async function MessagesPage() {
	await connectDB();

	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error('User ID is required');
	}

	const { userId } = sessionUser;

	const readMessages = await Message.find({
		recipient: userId,
		read: true,
	})
		.sort({ createdAt: -1 })
		.populate('sender', 'username')
		.populate('property', 'name')
		.lean();

	const unreadMessages = await Message.find({
		recipient: userId,
		read: false,
	})
		.sort({ createdAt: -1 })
		.populate('sender', 'username')
		.populate('property', 'name')
		.lean();

	const messages = [...unreadMessages, ...readMessages].map((messageDoc) => {
		const message = convertToObject(messageDoc);
		message.sender = convertToObject(message.sender);
		message.property = convertToObject(message.property);
		return message;
	});

	return (
		<section className='bg-amber-50'>
			<div className='px-2 py-20 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
				<h1 className='my-6 text-3xl font-semibold'>Your Messages</h1>
				<div className="space-y-4">
				{messages.length === 0 && (
					<h2 className='text-2xl font-bold text-center'>
						No Messages Found
					</h2>
				)}
				{messages.length > 0 && (
					<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
						{messages.map((message) => (
							<MessageCard
								key={String(message._id)}
								{...message}
							/>
						))}
					</div>
				)}
				</div>
			</div>
		</section>
	);
}
