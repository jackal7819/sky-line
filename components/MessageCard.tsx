import { IMessage } from '@/models/Message';

export default function MessageCard({ message }: { message: IMessage }) {
	return (
		<div className='relative flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-md shadow-md '>
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
				<button className='px-3 py-1 text-white duration-500 border-4 rounded-md bg-amber-500 border-amber-500 hover:bg-white hover:text-amber-500'>
					Mark As Read
				</button>
				<button className='px-3 py-1 text-white duration-500 border-4 rounded-md bg-rose-500 border-rose-500 hover:bg-white hover:text-rose-500'>
					Delete
				</button>
			</div>
		</div>
	);
}
