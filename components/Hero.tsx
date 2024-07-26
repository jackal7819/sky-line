export default function Hero() {
	return (
		<section className='py-20 mb-4 bg-amber-500'>
			<div className='flex flex-col items-center px-2 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
				<div className='text-center'>
					<h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
						Find The Perfect Rental
					</h1>
					<p className='my-4 text-xl text-white'>
						Discover the perfect property that suits your needs.
					</p>
				</div>
				<form className='flex flex-col items-center w-full max-w-2xl mx-auto mt-3 md:flex-row'>
					<div className='w-full mb-4 md:w-3/5 md:pr-2 md:mb-0'>
						<label htmlFor='location' className='sr-only'>
							Location
						</label>
						<input
							type='text'
							id='location'
							placeholder='Enter Location (City, State, Zip, etc'
							className='w-full px-4 py-3 text-black bg-white rounded-lg focus:outline-none focus:ring focus:ring-black'
						/>
					</div>
					<div className='w-full md:w-2/5 md:pl-2'>
						<label htmlFor='property-type' className='sr-only'>
							Property Type
						</label>
						<select
							id='property-type'
							className='w-full px-4 py-3 text-black bg-white rounded-lg focus:outline-none focus:ring focus:ring-black'
						>
							<option value='All'>All</option>
							<option value='Apartment'>Apartment</option>
							<option value='Studio'>Studio</option>
							<option value='Condo'>Condo</option>
							<option value='House'>House</option>
							<option value='Cabin Or Cottage'>
								Cabin or Cottage
							</option>
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
			</div>
		</section>
	);
}
