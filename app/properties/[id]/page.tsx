import Property from '@/models/Property';
import PropertyHeader from '@/components/PropertyHeader'
import connectDB from '@/config/database';

type Params = {
	id: string;
};

export default async function PropertyPage({ params }: { params: Params }) {
	await connectDB();
	const property = await Property.findById(params.id).lean();

	if (!property) {
		return {
			notFound: true,
		};
	}

	return (
		<section>
			<PropertyHeader name={property.name} image={property.images[0]} />
			<h1>{property.name}</h1>
		</section>
	);
}
