import { ObjectId } from 'mongoose'
import Image from 'next/image';
import Link from 'next/link';
import { FaBath, FaBed, FaMoneyBill, FaRulerCombined } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

type RatePeriod = 'monthly' | 'weekly' | 'nightly';

type Rates = {
	monthly?: number;
	weekly?: number;
	nightly?: number;
};

type PeriodConfig = {
	key: RatePeriod;
	suffix: string;
};

type PropertyCardProps = {
	_id: ObjectId;
	name: string;
	type: string;
	rates: Rates;
	beds: number;
	baths: number;
	square_feet: number;
	location: {
		street: string;
		city: string;
		state: string;
		zipcode: string;
	};
	images: string[];
};
export default function PropertyCard({
	_id,
	name,
	type,
	rates,
	beds,
	baths,
	square_feet,
	location,
	images,
}: PropertyCardProps) {
	const formatRate = (rates: Rates) => {
		const periods: PeriodConfig[] = [
			{ key: 'monthly', suffix: '/mo' },
			{ key: 'weekly', suffix: '/wk' },
			{ key: 'nightly', suffix: '/night' },
		];

		for (const { key, suffix } of periods) {
			if (rates[key]) {
				return `${rates[key].toLocaleString()}${suffix}`;
			}
		}

		return '';
	};
	return (
		<div className='relative shadow-md rounded-xl'>
			<Image
				src={`/properties/${images[0]}`}
				width={0}
				height={0}
				sizes='100vw'
				alt={name}
				className='w-full h-auto rounded-t-xl'
			/>
			<div className='p-4'>
				<div className='mb-6 text-left md:text-center lg:text-left'>
					<div className='text-gray-600'>{type}</div>
					<h3 className='text-xl font-bold'>{name}</h3>
				</div>
				<h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-amber-500 font-bold text-right md:text-center lg:text-right'>
					${formatRate(rates)}
				</h3>

				<div className='flex justify-center gap-4 mb-4 text-gray-500'>
					<p>
						<FaBed className='inline mr-2' /> {beds}{' '}
						<span className='md:hidden lg:inline'>Beds</span>
					</p>
					<p>
						<FaBath className='inline mr-2' /> {baths}{' '}
						<span className='md:hidden lg:inline'>Baths</span>
					</p>
					<p>
						<FaRulerCombined className='inline mr-2' />{' '}
						{square_feet.toLocaleString()}{' '}
						<span className='md:hidden lg:inline'>sq ft</span>
					</p>
				</div>

				<div className='flex justify-center gap-4 mb-4 text-sm text-amber-500'>
					{rates.nightly && (
						<p>
							<FaMoneyBill className='inline mr-2' /> Nightly
						</p>
					)}
					{rates.weekly && (
						<p>
							<FaMoneyBill className='inline mr-2' /> Weekly
						</p>
					)}
					{rates.monthly && (
						<p>
							<FaMoneyBill className='inline mr-2' /> Monthly
						</p>
					)}
				</div>

				<div className='mb-5 border border-gray-100'></div>

				<div className='flex flex-col items-center justify-between mb-4 lg:flex-row'>
					<div className='flex items-center gap-2 mb-4 text-orange-500 lg:mb-0'>
						<FaLocationDot />
						<span>
							{location.city} {location.state}
						</span>
					</div>
					<Link
						href={`/property/${_id}`}
						className='px-4 py-2 text-sm text-center text-white duration-500 bg-black rounded-lg h-9 hover:bg-amber-500'
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
}
