'use client';

import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

export default function PropertyImages({ images }: { images: string[] }) {
	return (
		<Gallery>
			<section className='bg-blue-50'>
				<div className='px-2 pb-6 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl'>
					{images.length === 1 ? (
						<Item
							original={images[0]}
							thumbnail={images[0]}
							width='1100'
							height='620'
						>
							{({ ref, open }) => (
								<Image
									src={images[0]}
									ref={ref}
									onClick={open}
									alt={images[0]}
									width={1800}
									height={400}
									priority={true}
									className='object-cover h-[400px] w-full rounded-xl cursor-pointer'
								/>
							)}
						</Item>
					) : (
						<div className='grid grid-cols-2 gap-4'>
							{images.map((image, index) => (
								<div
									key={index}
									className={`${
										images.length === 3 && index === 2
											? 'col-span-2'
											: 'col-span-1'
									}`}
								>
									<Item
										original={image}
										thumbnail={image}
										width='1100'
										height='620'
									>
										{({ ref, open }) => (
											<Image
												src={image}
												alt={image}
												ref={ref}
												onClick={open}
												width={1800}
												height={400}
												priority={true}
												className='object-cover h-[400px] w-full rounded-xl cursor-pointer'
											/>
										)}
									</Item>
								</div>
							))}
						</div>
					)}
				</div>
			</section>
		</Gallery>
	);
}
