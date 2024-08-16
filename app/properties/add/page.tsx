import PropertyAddForm from '@/components/PropertyAddForm';

export default function PropertiesAddPage() {
	return (
		<section className='bg-amber-50'>
			<div className='max-w-5xl py-24 mx-auto'>
				<div className='px-2 py-8 m-4 mb-4 bg-white border rounded-md shadow-md sm:px-6 lg:px-8 md:m-0'>
					<PropertyAddForm />
				</div>
			</div>
		</section>
	);
}
