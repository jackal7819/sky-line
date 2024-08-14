import Image from 'next/image';

export default function PropertyImages({ images }: { images: string[] }) {
	return (
		<section className='bg-blue-50'>
			<div className='px-2 pb-6 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl'>
				{images.length === 1 ? (
					<Image
						src={images[0]}
						alt={images[0]}
						width={1800}
						height={400}
						priority={true}
						className='object-cover h-[400px] w-full rounded-xl'
					/>
				) : (
					<div className='grid grid-cols-2 gap-4'>
						{images.map((image, index) => (
							<div key={index} className={`${images.length === 3 && index === 2 ? 'col-span-2' : 'col-span-1'}`}>
								<Image
									src={image}
									alt={image}
									width={1800}
									height={400}
									priority={true}
									className='object-cover h-[400px] w-full rounded-xl'
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
