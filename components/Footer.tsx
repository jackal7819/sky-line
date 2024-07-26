import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
	return (
		<footer className='py-4 mt-auto bg-gray-200'>
			<div className='flex flex-col items-center justify-between px-2 mx-auto md:flex-row max-w-screen-2xl sm:px-6 lg:px-8'>
				<div className='mb-4 md:mb-0'>
					<Logo />
				</div>
				<div className='flex flex-wrap justify-center mb-4 md:justify-start md:mb-0'>
					<ul className='flex space-x-4'>
						<li>
							<Link
								href='/properties'
								className='duration-500 hover:text-gray-500'
							>
								Properties
							</Link>
						</li>
						<li>
							<Link
								href='/terms'
								className='duration-500 hover:text-gray-500'
							>
								Terms of Service
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<p className='mt-2 text-sm text-gray-500 md:mt-0'>
						&copy; 2024 SkyLine. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
