import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import PropertySearchForm from '@/components/PropertySearchForm';
import connectDB from '@/config/database';
import convertToObject from '@/utils/convertToObject';
import Property, { IProperty } from '@/models/Property';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

interface SearchParams {
	searchParams: {
		location: string;
		propertyType: string;
	};
}

export default async function SearchResultsPage({
	searchParams: { location, propertyType },
}: SearchParams) {
	await connectDB();

	const locationPattern = new RegExp(location, 'i');

	let query: Record<string, any> = {
		$or: [
			{ name: locationPattern },
			{ description: locationPattern },
			{ 'location.street': locationPattern },
			{ 'location.city': locationPattern },
			{ 'location.state': locationPattern },
			{ 'location.zipcode': locationPattern },
		],
	};

	if (propertyType && propertyType !== 'All') {
		const typePattern = new RegExp(propertyType, 'i');
		query.type = typePattern;
	}

	const propertiesQueryResults: IProperty[] = await Property.find(
		query
	).lean();
	const properties = convertToObject(propertiesQueryResults);

	return (
		<article>
			<section className='pt-4 pb-7 bg-amber-500'>
				<div className='flex flex-col items-center px-2 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
					<PropertySearchForm />
				</div>
			</section>
			<section className='py-4'>
				<div className='px-2 py-6 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl'>
					<Link
						href='/properties'
						className='flex items-center gap-2 duration-500 text-amber-500 hover:text-black'
					>
						<FaArrowAltCircleLeft size={24} />
						Back to Properties
					</Link>
					<h1 className='my-6 text-3xl font-semibold'>
						Search Results
					</h1>
					{properties.length === 0 && (
						<h2 className='text-2xl font-bold text-center'>
							No Search Results
						</h2>
					)}
					{properties.length > 0 && (
						<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
							{properties.map((property: IProperty) => (
								<PropertyCard
									key={String(property._id)}
									{...property}
								/>
							))}
						</div>
					)}
				</div>
			</section>
		</article>
	);
}
