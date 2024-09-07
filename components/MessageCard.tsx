import { IMessage } from '@/models/Message';

export default function MessageCard({ message }: { message: IMessage }) {
	return (
		<div className='relative p-4 bg-white border border-gray-200 rounded-md shadow-md'>
			<h2 className='mb-4 text-xl'>
				<span className='font-bold'>Property Inquiry: </span>
				{message.name}
			</h2>
		</div>
	);
}
