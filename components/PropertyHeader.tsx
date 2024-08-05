import Image from 'next/image';

type PropertyHeaderProps = {
	name: string;
	image: string;
};

export default function PropertyHeader({ name, image }: PropertyHeaderProps) {
	return (
		<div className='m-auto'>
			<div className='grid grid-cols-1'>
				<Image
					src={`/properties/${image}`}
					alt={name}
					className='object-cover w-full h-96'
					width={0}
					height={0}
					sizes='100vw'
				/>
			</div>
		</div>
	);
}
