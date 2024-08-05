import Link from 'next/link';
import Property from '@/models/Property';
import connectDB from '@/config/database';

import PropertyCard from './PropertyCard';

export default async function HomeProperties() {
	await connectDB();
	const recentProperties = await Property.find({})
		.sort({ createdAt: -1 })
		.limit(3)
		.lean();

	return (
		<>
			<section className='px-4 py-6'>
				<div className='m-auto container-xl lg:container'>
					<h2 className='mb-6 text-3xl font-bold text-center text-amber-500'>
						Recent Properties
					</h2>
					{recentProperties.length === 0 && (
						<h2 className='text-2xl font-bold text-center'>
							No Properties Found
						</h2>
					)}
					{recentProperties.length > 0 && (
						<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
							{recentProperties.map((property) => (
								<PropertyCard
									key={String(property._id)}
									{...property}
								/>
							))}
						</div>
					)}
				</div>
			</section>
			<div className='max-w-lg px-6 m-auto mt-6 mb-10'>
				<Link
					href='/properties'
					className='block px-6 py-4 text-center text-white duration-500 bg-black rounded-lg hover:bg-amber-500'
				>
					View All Properties
				</Link>
			</div>
		</>
	);
}
