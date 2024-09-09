'use client';

import deleteMessage from '@/app/actions/deleteMessage';
import markMessageAsRead from '@/app/actions/markMessageAsRead';
import { IMessage } from '@/models/Message';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function MessageCard({ message }: { message: IMessage }) {
	const [isRead, setIsRead] = useState(message.read);
	const [isDelete, setIsDelete] = useState(false);

	const handleReadClick = async () => {
		const read = await markMessageAsRead(String(message._id));
		setIsRead(read);
		toast.success(`Marked  As ${read ? 'Read' : 'New'}`);
	};

	const handleDeleteClick = async () => {
		await deleteMessage(String(message._id));
		setIsDelete(true);
		toast.success('Message deleted');
	};

	return (
		<div className='relative flex flex-col gap-4 p-4 bg-white border border-gray-200 rounded-md shadow-md '>
			{!isRead && (
				<div className='absolute px-2 py-1 text-white bg-gray-500 rounded-md right-2 top-2'>
					New
				</div>
			)}
			<h2 className='mb-4 text-xl'>
				<span className='font-bold'>Property Inquiry: </span>
				{message.property.name}
			</h2>
			<p className='text-gray-700'>{message.body}</p>
			<ul className='mt-auto space-y-2'>
				<li>
					<strong>Reply Email: </strong>
					<a
						href={`mailto:${message.email}`}
						className='text-amber-500'
					>
						{message.email}
					</a>
				</li>
				<li>
					<strong>Reply Phone: </strong>
					<a href={`tel:${message.phone}`} className='text-amber-500'>
						{message.phone}
					</a>
				</li>
				<li>
					<strong>Received: </strong>
					{new Date(message.createdAt).toLocaleString()}
				</li>
			</ul>
			<div className='flex gap-5'>
				<button
					onClick={handleReadClick}
					className='px-3 py-1 text-white duration-500 border-4 rounded-md bg-amber-500 border-amber-500 hover:bg-white hover:text-amber-500'
				>
					{isRead ? 'Mark As New' : 'Mark As Read'}
				</button>
				<button
					onClick={handleDeleteClick}
					className='px-3 py-1 text-white duration-500 border-4 rounded-md bg-rose-500 border-rose-500 hover:bg-white hover:text-rose-500'
				>
					Delete
				</button>
			</div>
		</div>
	);
}
