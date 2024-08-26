import { FaPaperPlane } from 'react-icons/fa6';
import { IProperty } from '@/models/Property';

export default function PropertyContactForm({
	property,
}: {
	property: IProperty;
}) {
	return (
		<div className='p-6 bg-white rounded-lg shadow-md'>
			<h3 className='mb-6 text-xl font-bold'>Contact Property Manager</h3>
			<form>
				<div className='mb-4'>
					<label
						className='block mb-2 text-sm font-bold text-gray-700'
						htmlFor='name'
					>
						Name:
					</label>
					<input
						className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
						id='name'
						type='text'
						placeholder='Enter your name'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block mb-2 text-sm font-bold text-gray-700'
						htmlFor='email'
					>
						Email:
					</label>
					<input
						className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
						id='email'
						type='email'
						placeholder='Enter your email'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block mb-2 text-sm font-bold text-gray-700'
						htmlFor='phone'
					>
						Phone:
					</label>
					<input
						className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
						id='phone'
						type='text'
						placeholder='Enter your phone number'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block mb-2 text-sm font-bold text-gray-700'
						htmlFor='message'
					>
						Message:
					</label>
					<textarea
						className='w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none h-44 focus:outline-none focus:shadow-outline'
						id='message'
						placeholder='Enter your message'
					></textarea>
				</div>
				<div>
					<button
						className='flex items-center justify-center w-full gap-2 px-4 py-2 font-bold text-white duration-500 border-4 rounded-md bg-amber-500 hover:bg-white focus:outline-none focus:shadow-outline border-amber-500 hover:text-amber-500'
						type='submit'
					>
						<FaPaperPlane /> Send Message
					</button>
				</div>
			</form>
		</div>
	);
}
