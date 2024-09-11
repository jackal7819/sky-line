import { IProperty } from '@/models/Property';
import { formatRate } from '@/utils/formatRate';
import Image from 'next/image';
import Link from 'next/link';
import { FaBath, FaBed, FaMoneyBill, FaRulerCombined } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export default function FeaturedPropertyCard({
	property,
}: {
	property: IProperty;
}) {
	return (
		<div className='relative flex flex-col bg-white shadow-md rounded-xl md:flex-row'>
			<Image
				src={property.images[0]}
				width={0}
				height={0}
				sizes='100vw'
				alt={property.name}
				className='object-cover w-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl md:w-2/5'
			/>
			<div className='p-6'>
				<h3 className='text-xl font-bold'>{property.name}</h3>
				<div className='mb-4 text-gray-600'>{property.type}</div>
				<h3 className='absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-amber-500 font-bold text-right md:text-center lg:text-right'>
					${formatRate(property.rates)}
				</h3>
				<div className='flex justify-center gap-4 mb-4 text-gray-500'>
					<p>
						<FaBed className='inline mr-2' /> {property.beds}{' '}
						<span className='md:hidden lg:inline'>Beds</span>
					</p>
					<p>
						<FaBath className='inline mr-2' /> {property.baths}{' '}
						<span className='md:hidden lg:inline'>Baths</span>
					</p>
					<p>
						<FaRulerCombined className='inline mr-2' />{' '}
						{property.square_feet.toLocaleString()}{' '}
						<span className='md:hidden lg:inline'>sq ft</span>
					</p>
				</div>

				<div className='flex justify-center gap-4 mb-4 text-sm text-amber-500'>
					{property.rates.nightly && (
						<p>
							<FaMoneyBill className='inline mr-2' /> Nightly
						</p>
					)}
					{property.rates.weekly && (
						<p>
							<FaMoneyBill className='inline mr-2' /> Weekly
						</p>
					)}
					{property.rates.monthly && (
						<p>
							<FaMoneyBill className='inline mr-2' /> Monthly
						</p>
					)}
				</div>

				<div className='mb-5 border border-gray-200'></div>

				<div className='flex flex-col items-center justify-between mb-4 lg:flex-row'>
					<div className='flex items-center gap-2 mb-4 text-orange-500 lg:mb-0'>
						<FaLocationDot />
						<span>
							{property.location.city} {property.location.state}
						</span>
					</div>
					<Link
						href={`/properties/${property._id}`}
						className='px-4 py-2 text-sm text-center text-white duration-500 bg-black rounded-lg h-9 hover:bg-amber-500'
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
}
