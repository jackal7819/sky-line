'use client';
import { IProperty } from '@/models/Property';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProfilePropertiesProps {
	properties: IProperty[];
}

export default function ProfileProperties({
	properties: initialProperties,
}: ProfilePropertiesProps) {
	const [properties, setProperties] = useState(initialProperties);

	return (
		<>
			{properties.map((property) => (
				<div className='mb-10' key={String(property._id)}>
					<Link href={`/properties/${property._id}`}>
						<Image
							className='object-cover w-full h-40 rounded-md'
							src={property.images[0]}
							alt={property.name}
							width={1000}
							height={200}
						/>
					</Link>
					<div className='mt-4'>
						<p className='text-lg font-semibold'>{property.name}</p>
						<p className='text-gray-600'>
							Address: {property.location.street},{' '}
							{property.location.city}, {property.location.state}
						</p>
					</div>
					<div className='flex gap-4 mt-4'>
						<Link
							href='/add-property'
							className='px-6 py-2 text-white duration-500 border-4 rounded-md bg-amber-500 hover:bg-white border-amber-500 hover:text-amber-500'
						>
							Edit
						</Link>
						<button
							className='px-6 py-2 text-white duration-500 border-4 rounded-md bg-rose-500 hover:bg-white border-rose-500 hover:text-rose-500'
							type='button'
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</>
	);
}
