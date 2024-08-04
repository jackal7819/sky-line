'use client';

import HashLoader from 'react-spinners/HashLoader';

export default function LoadingPage() {
	return (
		<section className='flex items-center justify-center w-full bg-blue-50'>
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
