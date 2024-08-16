import ProfileProperties from '@/components/ProfileProperties';
import connectDB from '@/config/database';
import Property, { IProperty } from '@/models/Property';
import convertToObject from '@/utils/convertToObject';
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

	const propertiesDocs = await Property.find({ owner: userId }).lean();
	const properties: IProperty[] = propertiesDocs.map(
		(doc) => convertToObject(doc) as IProperty
	);

	return (
		<section className='bg-amber-50'>
			<div className='py-24'>
				<div className='px-2 py-8 mx-auto bg-white border rounded-md shadow-md max-w-screen-2xl sm:px-6 lg:px-8'>
					<h1 className='mb-4 text-3xl font-bold'>Your Profile</h1>
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
							<h2 className='mb-4 text-2xl font-bold'>
								Your Listings
							</h2>
							<ProfileProperties properties={properties} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
