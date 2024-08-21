import { IProperty } from '@/models/Property';
import {
	FaBath,
	FaBed,
	FaCheck,
	FaRulerCombined,
	FaTimes,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import PropertyMap from './PropertyMap';

type PropertyPageProps = {
	property: IProperty;
};

export default function PropertyDetails({ property }: PropertyPageProps) {
	return (
		<main>
			<div className='p-6 text-center bg-white rounded-lg shadow-md md:text-left'>
				<div className='mb-4 text-gray-500'>{property.type}</div>
				<h1 className='mb-4 text-3xl font-bold'>{property.name}</h1>
				<div className='flex items-center justify-center gap-2 mb-4 text-orange-500 md:justify-start'>
					<FaLocationDot />
					<p>
						{property.location.street} {property.location.city},{' '}
						{property.location.state} {property.location.zipcode}
					</p>
				</div>

				<h3 className='p-2 my-6 text-lg font-bold text-white bg-gray-800'>
					Rates & Options
				</h3>
				<div className='flex flex-col justify-around md:flex-row'>
					<div className='flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0'>
						<div className='mr-2 font-bold text-gray-500'>
							Nightly
						</div>
						<div className='text-2xl font-bold text-amber-500'>
							{property.rates.nightly ? (
								`$${property.rates.nightly.toLocaleString()}`
							) : (
								<FaTimes className='text-rose-700 ' />
							)}
						</div>
					</div>
					<div className='flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0'>
						<div className='mr-2 font-bold text-gray-500'>
							Weekly
						</div>
						<div className='text-2xl font-bold text-amber-500'>
							{property.rates.weekly ? (
								`$${property.rates.weekly.toLocaleString()}`
							) : (
								<FaTimes className='text-rose-700 ' />
							)}
						</div>
					</div>
					<div className='flex items-center justify-center pb-4 mb-4 md:pb-0'>
						<div className='mr-2 font-bold text-gray-500'>
							Monthly
						</div>
						<div className='text-2xl font-bold text-amber-500'>
							{property.rates.monthly ? (
								`$${property.rates.monthly.toLocaleString()}`
							) : (
								<FaTimes className='text-rose-700 ' />
							)}
						</div>
					</div>
				</div>
			</div>

			<div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
				<h3 className='mb-6 text-lg font-bold'>
					Description & Details
				</h3>
				<div className='flex justify-center gap-4 mb-4 text-xl text-amber-500 space-x-9'>
					<p>
						<FaBed className='inline mr-2' /> {property.beds}{' '}
						<span className='hidden ml-2 sm:inline'>Beds</span>
					</p>
					<p>
						<FaBath className='inline mr-2' /> {property.baths}{' '}
						<span className='hidden sm:inline'>Baths</span>
					</p>
					<p>
						<FaRulerCombined className='inline mr-2' />{' '}
						{property.square_feet.toLocaleString()}{' '}
						<span className='hidden sm:inline'>sq ft</span>
					</p>
				</div>
				<p className='mb-4 text-gray-500'>{property.description}</p>
			</div>

			<div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
				<h3 className='mb-6 text-lg font-bold'>Amenities</h3>

				<ul className='grid grid-cols-1 list-none md:grid-cols-2 lg:grid-cols-3'>
					{property.amenities.map((amenity) => (
						<li
							key={amenity}
							className='flex items-center gap-2 mb-2 text-gray-500'
						>
							<FaCheck className='text-green-600' />
							{amenity}
						</li>
					))}
				</ul>
			</div>
			<div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
				<div id='map'>
					<PropertyMap property={property} />
				</div>
			</div>
		</main>
	);
}
