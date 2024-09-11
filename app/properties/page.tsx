import Property from '@/models/Property';
import PropertyCard from '@/components/PropertyCard';
import connectDB from '@/config/database';
import Pagination from '@/components/Pagination';

interface Params {
	searchParams: {
		page: string;
		pageSize?: string;
	};
}

export default async function PropertiesPage({
	searchParams: { page = '1', pageSize = '5' },
}: Params) {
	await connectDB();
	const skip = (Number(page) - 1) * Number(pageSize);
	const total = await Property.countDocuments({});
	const properties = await Property.find({})
		.skip(skip)
		.limit(Number(pageSize))
		.lean();

	const showPagination = total > Number(pageSize);

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
								property={property}
							/>
						))}
					</div>
				)}
				{showPagination && (
					<Pagination
						page={parseInt(page)}
						pageSize={parseInt(pageSize)}
						totalItems={total}
					/>
				)}
			</div>
		</section>
	);
}
