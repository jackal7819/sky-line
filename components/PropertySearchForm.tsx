'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PropertySearchForm() {
	const [location, setLocation] = useState('');
	const [propertyType, setPropertyType] = useState('');

	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (location === '' && propertyType === '') {
			router.push('/properties');
		} else {
			const query = `?location=${location}&propertyType=${propertyType}`;
			router.push(`/properties/search-results${query}`);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col items-center w-full max-w-2xl mx-auto mt-3 md:flex-row'
		>
			<div className='w-full mb-4 md:w-3/5 md:pr-2 md:mb-0'>
				<label htmlFor='location' className='sr-only'>
					Location
				</label>
				<input
					type='text'
					id='location'
					placeholder='Enter Location (City, State, Zip, etc'
					className='w-full px-4 py-3 text-black bg-white rounded-lg focus:outline-none focus:ring focus:ring-black'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
			</div>
			<div className='w-full md:w-2/5 md:pl-2'>
				<label htmlFor='property-type' className='sr-only'>
					Property Type
				</label>
				<select
					id='property-type'
					className='w-full px-4 py-3 text-black bg-white rounded-lg focus:outline-none focus:ring focus:ring-black'
					value={propertyType}
					onChange={(e) => setPropertyType(e.target.value)}
				>
					<option value='All'>All</option>
					<option value='Apartment'>Apartment</option>
					<option value='Studio'>Studio</option>
					<option value='Condo'>Condo</option>
					<option value='House'>House</option>
					<option value='Cabin Or Cottage'>Cabin or Cottage</option>
					<option value='Loft'>Loft</option>
					<option value='Room'>Room</option>
					<option value='Other'>Other</option>
				</select>
			</div>
			<button
				type='submit'
				className='w-full px-6 py-3 mt-4 text-white duration-500 bg-black rounded-lg md:ml-4 md:mt-0 md:w-auto hover:bg-white hover:text-amber-500 focus:outline-none focus:ring focus:ring-black'
			>
				Search
			</button>
		</form>
	);
}
