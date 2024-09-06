import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import PropertyContactForm from '@/components/PropertyContactForm';
import PropertyDetails from '@/components/PropertyDetails';
import PropertyHeader from '@/components/PropertyHeader';
import PropertyImages from '@/components/PropertyImages';
import ShareButtons from '@/components/ShareButtons';
import connectDB from '@/config/database';
import convertToObject from '@/utils/convertToObject';
import Property, { IProperty } from '@/models/Property';
import { FaArrowLeftLong } from 'react-icons/fa6';

type Params = {
	id: string;
};

export default async function PropertyPage({ params }: { params: Params }) {
	await connectDB();

	const propertyDoc = await Property.findById(params.id).lean();

	if (!propertyDoc) {
		return (
			<section className='grid place-items-center'>
				<h1 className='text-3xl font-bold text-center'>
					Property Not Found
				</h1>
			</section>
		);
	}

	const property = convertToObject(propertyDoc) as IProperty;

	return (
		<section>
			<PropertyHeader name={property.name} image={property.images[0]} />
			<div className='px-2 py-6 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl'>
				<Link
					href='/properties'
					className='flex items-center w-48 gap-2 duration-500 text-amber-500 hover:text-black'
				>
					<FaArrowLeftLong size={24} />
					Back to Properties
				</Link>
			</div>
			<div className='bg-blue-50'>
				<div className='px-2 py-10 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl'>
					<div className='grid w-full grid-cols-1 gap-6 md:grid-cols-70/30'>
						{/* PROPERTY INFO */}
						<PropertyDetails property={property} />
						<aside className='space-y-4'>
							<BookmarkButton property={property} />
							<ShareButtons property={property} />
							<PropertyContactForm property={property} />
						</aside>
					</div>
				</div>
			</div>
			<PropertyImages images={property.images} />
		</section>
	);
}
