import Link from 'next/link';

export default function InfoBoxes() {
	return (
		<section className='m-auto container-xl lg:container'>
			<div className='grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2'>
				<div className='p-6 bg-gray-100 rounded-lg shadow-md'>
					<h2 className='text-2xl font-bold'>For Renters</h2>
					<p className='mt-2 mb-4'>
						Find your dream rental property. Bookmark properties and
						contact owners.
					</p>
					<Link
						href='/properties'
						className='inline-block px-4 py-2 text-white duration-500 bg-black rounded-lg hover:bg-amber-500'
					>
						Browse Properties
					</Link>
				</div>
				<div className='p-6 bg-blue-100 rounded-lg shadow-md'>
					<h2 className='text-2xl font-bold'>For Property Owners</h2>
					<p className='mt-2 mb-4'>
						List your properties and reach potential tenants. Rent
						as an airbnb or long term.
					</p>
					<Link
						href='/properties/add'
						className='inline-block px-4 py-2 text-white duration-500 rounded-lg bg-amber-500 hover:bg-black'
					>
						Add Property
					</Link>
				</div>
			</div>
		</section>
	);
}
