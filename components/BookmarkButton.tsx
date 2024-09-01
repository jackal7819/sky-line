'use client';

import bookmarkProperty from '@/app/actions/bookmarkProperty';
import { FaBookmark } from 'react-icons/fa6';
import { IProperty } from '@/models/Property';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import checkBookmarkStatus from '@/app/actions/checkBookmarkStatus';

export default function BookmarkButton({ property }: { property: IProperty }) {
	const { data: session } = useSession();
	const userId = session?.user?.id;

	const [isBookmarked, setIsBookmarked] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!userId) {
			setLoading(false);
			return;
		}

		const fetchBookmarkStatus = async () => {
			try {
				const res = await checkBookmarkStatus(String(property._id));
				if (res.isBookmarked) {
					setIsBookmarked(res.isBookmarked);
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
		fetchBookmarkStatus();
	}, [property._id, userId, checkBookmarkStatus]);

	const handleClick = async () => {
		if (!userId) {
			toast.error('You must be logged in to bookmark a property');
			return;
		}

		try {
			const res = await bookmarkProperty(String(property._id));
			setIsBookmarked(res.isBookmarked);
			toast.success(res.message);
		} catch (error) {
			toast.error('Failed to bookmark property');
			console.log(error);
		}
	};

	if (loading)
		return (
			<button className='flex items-center justify-center w-full gap-2 px-4 py-2 font-bold text-white duration-500 border-4 rounded-md bg-amber-500 hover:bg-white border-amber-500 hover:text-amber-500'>
				Loading...
			</button>
		);

	return isBookmarked ? (
		<button
			className='flex items-center justify-center w-full gap-2 px-4 py-2 font-bold text-white duration-500 border-4 rounded-md bg-rose-500 hover:bg-white border-rose-500 hover:text-rose-500'
			onClick={handleClick}
		>
			<FaBookmark /> Remove Bookmark
		</button>
	) : (
		<button
			className='flex items-center justify-center w-full gap-2 px-4 py-2 font-bold text-white duration-500 border-4 rounded-md bg-amber-500 hover:bg-white border-amber-500 hover:text-amber-500'
			onClick={handleClick}
		>
			<FaBookmark /> Bookmark Property
		</button>
	);
}
