'use client';

import Error from 'next/error';
import Link from 'next/link';
import { FaExclamationCircle } from 'react-icons/fa';

export default function ErrorPage({ error }: { error: Error }) {
	return (
		<section className='flex items-center justify-center w-full bg-blue-50'>
			<div className='max-w-2xl py-10 m-auto'>
				<div className='p-6 pb-10 m-4 mb-4 bg-white border rounded-md shadow-md md:p-20 md:m-0'>
					<FaExclamationCircle className='m-auto text-8xl text-amber-500' />
					<div className='text-center'>
						<h1 className='mt-4 mb-2 text-3xl font-bold'>
							Something Went Wrong
						</h1>
						<p className='mb-10 text-xl text-gray-500'>
							{error.toString()}
						</p>
						<Link
							href='/'
							className='px-6 py-4 font-bold text-white duration-500 rounded bg-amber-500 hover:bg-black'
						>
							Go Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
