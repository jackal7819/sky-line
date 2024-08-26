import { FaBookmark } from 'react-icons/fa6';
import { IProperty } from '@/models/Property';

export default function BookmarkButton({ property }: { property: IProperty }) {
	return (
		<button className='flex items-center justify-center w-full gap-2 px-4 py-2 font-bold text-white duration-500 border-4 rounded-md bg-amber-500 hover:bg-white border-amber-500 hover:text-amber-500'>
			<FaBookmark /> Bookmark Property
		</button>
	);
}
