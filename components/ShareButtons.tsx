import { FaShare } from 'react-icons/fa6';
import { IProperty } from '@/models/Property';

export default function ShareButtons({ property }: { property: IProperty }) {
	return (
		<button className='flex items-center justify-center w-full gap-2 px-4 py-2 font-bold text-white duration-500 bg-orange-500 border-4 border-orange-500 rounded-md hover:bg-white hover:text-orange-500'>
			<FaShare /> Share Property
		</button>
	);
}
