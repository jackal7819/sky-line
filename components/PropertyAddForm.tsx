import addProperty from '@/app/actions/addProperty';
import { amenitiesList } from '@/utils/amenitiesList';

export default function PropertyAddForm() {
	return (
		<form action={addProperty}>
			<h2 className='mb-6 text-3xl font-semibold text-center'>
				Add Property
			</h2>

			<div className='mb-4'>
				<label
					htmlFor='type'
					className='block mb-2 font-bold text-gray-700'
				>
					Property Type
				</label>
				<select
					id='type'
					name='type'
					className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					required
				>
					<option value='Apartment'>Apartment</option>
					<option value='Condo'>Condo</option>
					<option value='House'>House</option>
					<option value='Cabin Or Cottage'>Cabin or Cottage</option>
					<option value='Room'>Room</option>
					<option value='Studio'>Studio</option>
					<option value='Other'>Other</option>
				</select>
			</div>
			<div className='mb-4'>
				<label className='block mb-2 font-bold text-gray-700'>
					Listing Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					className='w-full px-3 py-2 mb-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					placeholder='eg. Beautiful Apartment In Miami'
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					htmlFor='description'
					className='block mb-2 font-bold text-gray-700'
				>
					Description
				</label>
				<textarea
					id='description'
					name='description'
					className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					rows={4}
					placeholder='Add an optional description of your property'
				></textarea>
			</div>

			<div className='p-4 mb-4 bg-blue-50'>
				<label className='block mb-2 font-bold text-gray-700'>
					Location
				</label>
				<input
					type='text'
					id='street'
					name='location.street'
					className='w-full px-3 py-2 mb-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					placeholder='Street'
				/>
				<input
					type='text'
					id='city'
					name='location.city'
					className='w-full px-3 py-2 mb-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					placeholder='City'
					required
				/>
				<input
					type='text'
					id='state'
					name='location.state'
					className='w-full px-3 py-2 mb-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					placeholder='State'
					required
				/>
				<input
					type='text'
					id='zipcode'
					name='location.zipcode'
					className='w-full px-3 py-2 mb-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					placeholder='Zipcode'
				/>
			</div>

			<div className='flex flex-wrap mb-4'>
				<div className='w-full pr-2 sm:w-1/3'>
					<label
						htmlFor='beds'
						className='block mb-2 font-bold text-gray-700'
					>
						Beds
					</label>
					<input
						type='number'
						id='beds'
						name='beds'
						className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
						required
					/>
				</div>
				<div className='w-full px-2 sm:w-1/3'>
					<label
						htmlFor='baths'
						className='block mb-2 font-bold text-gray-700'
					>
						Baths
					</label>
					<input
						type='number'
						id='baths'
						name='baths'
						className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
						required
					/>
				</div>
				<div className='w-full pl-2 sm:w-1/3'>
					<label
						htmlFor='square_feet'
						className='block mb-2 font-bold text-gray-700'
					>
						Square Feet
					</label>
					<input
						type='number'
						id='square_feet'
						name='square_feet'
						className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
						required
					/>
				</div>
			</div>

			<div className='mb-4'>
				<label className='block mb-2 font-bold text-gray-700'>
					Amenities
				</label>
				<div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
					{amenitiesList.map((amenity) => (
						<div key={amenity.id}>
							<input
								type='checkbox'
								id={amenity.id}
								name='amenities'
								value={amenity.value}
								className='mr-2'
							/>
							<label htmlFor={amenity.id}>{amenity.label}</label>
						</div>
					))}
				</div>
			</div>

			<div className='p-4 mb-4 bg-blue-50'>
				<label className='block mb-2 font-bold text-gray-700'>
					Rates (Leave blank if not applicable)
				</label>
				<div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
					<div className='flex items-center'>
						<label htmlFor='weekly_rate' className='mr-2'>
							Weekly
						</label>
						<input
							type='number'
							id='weekly_rate'
							name='rates.weekly'
							className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
						/>
					</div>
					<div className='flex items-center'>
						<label htmlFor='monthly_rate' className='mr-2'>
							Monthly
						</label>
						<input
							type='number'
							id='monthly_rate'
							name='rates.monthly'
							className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
						/>
					</div>
					<div className='flex items-center'>
						<label htmlFor='nightly_rate' className='mr-2'>
							Nightly
						</label>
						<input
							type='number'
							id='nightly_rate'
							name='rates.nightly'
							className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
						/>
					</div>
				</div>
			</div>

			<div className='mb-4'>
				<label
					htmlFor='seller_name'
					className='block mb-2 font-bold text-gray-700'
				>
					Seller Name
				</label>
				<input
					type='text'
					id='seller_name'
					name='seller_info.name'
					className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					placeholder='Name'
				/>
			</div>
			<div className='mb-4'>
				<label
					htmlFor='seller_email'
					className='block mb-2 font-bold text-gray-700'
				>
					Seller Email
				</label>
				<input
					type='email'
					id='seller_email'
					name='seller_info.email'
					className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					placeholder='Email address'
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					htmlFor='seller_phone'
					className='block mb-2 font-bold text-gray-700'
				>
					Seller Phone
				</label>
				<input
					type='tel'
					id='seller_phone'
					name='seller_info.phone'
					className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					placeholder='Phone'
				/>
			</div>

			<div className='mb-4'>
				<label
					htmlFor='images'
					className='block mb-2 font-bold text-gray-700'
				>
					Images (Select up to 4 images)
				</label>
				<input
					type='file'
					id='images'
					name='images'
					className='w-full px-3 py-2 text-black bg-white border rounded focus:outline-none focus:ring focus:ring-black'
					accept='image/*'
					multiple
				/>
			</div>

			<div>
				<button
					className='w-full px-4 py-2 font-bold text-white duration-500 bg-black rounded-md hover:bg-amber-500 focus:outline-none focus:shadow-outline'
					type='submit'
				>
					Add Property
				</button>
			</div>
		</form>
	);
}
