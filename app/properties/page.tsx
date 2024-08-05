import PropertyCard from '@/components/PropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';

export default async function PropertiesPage() {
	await connectDB();
	const properties = await Property.find({}).lean();

	return (
		<section className='px-4 py-6'>
			<div className='px-4 py-6 m-auto container-xl lg:container'>
				{properties.length === 0 && (
					<h2 className='text-2xl font-bold text-center'>
						No Properties Found
					</h2>
				)}
				{properties.length > 0 && (
					<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
						{properties.map((property) => (
							<PropertyCard key={String(property._id)} {...property} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}
