import PropertyEditForm from '@/components/PropertyEditForm';
import connectDB from '@/config/database'
import convertToObject from '@/utils/convertToObject'
import Property, { IProperty } from '@/models/Property'

type Params = {
	id: string;
};

export default async function EditPage({ params }: { params: Params }) {
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
		<section className='bg-amber-50'>
			<div className='max-w-5xl py-24 mx-auto'>
				<div className='px-2 py-8 m-4 mb-4 bg-white border rounded-md shadow-md sm:px-6 lg:px-8 md:m-0'>
					<PropertyEditForm property={property} />
				</div>
			</div>
		</section>
	);
}
