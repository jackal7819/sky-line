import connectDB from '@/config/database';
import Property from '@/models/Property'
import { getSessionUser } from '@/utils/getSessionUser';
import Image from 'next/image';
import { FaRegUser } from 'react-icons/fa';

export default async function ProfilePage() {
	await connectDB();

	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error('User ID is required');
	}

	const { userId } = sessionUser;
	const properties = await Property.find({ owner: userId }).lean();

	return (
		<section className='bg-amber-50'>
			<div className='py-24'>
				<div className='px-2 py-8 mx-auto bg-white border rounded-md shadow-md max-w-screen-2xl sm:px-6 lg:px-8'>
					<h1 className='mb-4 text-3xl font-bold'>
						Your Profile
					</h1>
					<div className='flex flex-col md:flex-row'>
						<div className='my-10 md:w-1/4'>
							<div className='mb-4'>
								{sessionUser?.user.image && (
									<Image
										className='w-20 h-20 mx-auto rounded-3xl md:h-32 md:w-32 md:mx-0'
										src={sessionUser.user.image}
										alt='user'
										width={200}
										height={200}
									/>
								)}
								{!sessionUser?.user.image && (
									<FaRegUser className='w-32 h-32 mx-auto rounded-3xl md:h-48 md:w-48 md:mx-0' />
								)}
							</div>
							<h2 className='mb-4 text-2xl'>
								<span className='block font-bold'>Name: </span>{' '}
								{sessionUser?.user.name}
							</h2>
							<h2 className='text-2xl'>
								<span className='block font-bold'>Email: </span>{' '}
								{sessionUser?.user.email}
							</h2>
						</div>

						<div className='md:w-3/4 md:pl-4'>
							<h2 className='mb-4 text-xl font-semibold'>
								Your Listings
							</h2>
							<div className='mb-10'>
								<a href='/property.html'>
									<img
										className='object-cover w-full h-32 rounded-md'
										src='/images/properties/a1.jpg'
										alt='Property 1'
									/>
								</a>
								<div className='mt-2'>
									<p className='text-lg font-semibold'>
										Property Title 1
									</p>
									<p className='text-gray-600'>
										Address: 123 Main St
									</p>
								</div>
								<div className='mt-2'>
									<a
										href='/add-property.html'
										className='px-3 py-3 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
									>
										Edit
									</a>
									<button
										className='px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-600'
										type='button'
									>
										Delete
									</button>
								</div>
							</div>
							<div className='mb-10'>
								<a href='/property.html'>
									<img
										className='object-cover w-full h-32 rounded-md'
										src='/images/properties/b1.jpg'
										alt='Property 2'
									/>
								</a>
								<div className='mt-2'>
									<p className='text-lg font-semibold'>
										Property Title 2
									</p>
									<p className='text-gray-600'>
										Address: 456 Elm St
									</p>
								</div>
								<div className='mt-2'>
									<a
										href='/add-property.html'
										className='px-3 py-3 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
									>
										Edit
									</a>
									<button
										className='px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-600'
										type='button'
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
