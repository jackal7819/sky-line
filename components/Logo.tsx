import Link from 'next/link';

export default function Logo() {
	return (
		<Link
			href='/'
			className='flex items-center justify-center p-1 text-xl font-semibold duration-300 bg-black rounded-md group hover:bg-white'
		>
			<span className='ml-1 mr-2 text-white duration-300 group-hover:text-amber-500'>
				Sky
			</span>
			<span className='flex items-center justify-center h-8 text-black duration-300 bg-white rounded w-14 group-hover:text-white group-hover:bg-amber-500'>
				Line
			</span>
		</Link>
	);
}
