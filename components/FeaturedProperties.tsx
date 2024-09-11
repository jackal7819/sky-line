import Property from '@/models/Property';
import connectDB from '@/config/database';
import FeaturedPropertyCard from './FeaturedPropertyCard';

export default async function FeaturedProperties() {
	await connectDB();
	const properties = await Property.find({
		is_featured: true,
	})
		.limit(2)
		.lean();

	return (
		properties.length > 0 && (
			<section className='py-6'>
				<div className='px-2 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
					<h2 className='mb-6 text-3xl font-bold text-center text-amber-500'>
						Featured Properties
					</h2>

					<div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
						{properties.map((property) => (
							<FeaturedPropertyCard
								key={String(property._id)}
								property={property}
							/>
						))}
					</div>
				</div>
			</section>
		)
	);
}
