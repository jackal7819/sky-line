import PropertyCard from '@/components/PropertyCard';
import properties from '@/properties.json';

export default function PropertiesPage() {
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
							<PropertyCard key={property._id} {...property} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}
