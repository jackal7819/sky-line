'use client';

import bookmarkProperty from '@/app/actions/bookmarkProperty'
import { FaBookmark } from 'react-icons/fa6';
import { IProperty } from '@/models/Property';
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'

export default function BookmarkButton({ property }: { property: IProperty }) {
	const {data:session} = useSession();
	const userId = session?.user?.id;
	
	const handleClick = async () => {
		if (!userId) {
			toast.error('You must be logged in to bookmark a property');
			return;
		}
		
		try {
			const res = await bookmarkProperty(String(property._id));
			toast.success(res.message);
		} catch (error) {
			toast.error('Failed to bookmark property');
			console.log(error);
		}
	}
	return (
		<button className='flex items-center justify-center w-full gap-2 px-4 py-2 font-bold text-white duration-500 border-4 rounded-md bg-amber-500 hover:bg-white border-amber-500 hover:text-amber-500' onClick={handleClick}>
			<FaBookmark /> Bookmark Property
		</button>
	);
}
