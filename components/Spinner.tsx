'use client';

import HashLoader from 'react-spinners/HashLoader';

export default function Spinner() {
	return (
		<section className='flex items-center justify-center w-full'>
			<HashLoader
				color='#F97316'
				loading={true}
				size={150}
				aria-label='Loading Spinner'
				data-testid='loader'
			/>
		</section>
	);
}
