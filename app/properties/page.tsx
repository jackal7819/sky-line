import Property from '@/models/Property';
import PropertyCard from '@/components/PropertyCard';
import connectDB from '@/config/database';

export default async function PropertiesPage() {
	await connectDB();
	const properties = await Property.find({}).lean();

	return (
		<section className='py-6'>
			<div className='px-2 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
				{properties.length === 0 && (
					<h2 className='text-2xl font-bold text-center'>
						No Properties Found
					</h2>
				)}
				{properties.length > 0 && (
					<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
						{properties.map((property) => (
							<PropertyCard
								key={String(property._id)}
								{...property}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
