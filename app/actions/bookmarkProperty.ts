'use server';

import User from '@/models/User';
import connectDB from '@/config/database';
import { Types } from 'mongoose';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

interface BookmarkResult {
	message: string;
	isBookmarked: boolean;
}

export default async function bookmarkProperty(
	propertyId: string
): Promise<BookmarkResult> {
	await connectDB();

	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error('User ID is required');
	}

	const { userId } = sessionUser;

	const user = await User.findById(userId);

	if (!user) {
		throw new Error('User not found');
	}

	const propertyObjectId =
		typeof propertyId === 'string'
			? new Types.ObjectId(propertyId)
			: propertyId;

	// Type assertion to ensure TypeScript recognizes it as a Mongoose array
	const bookmarks = user.bookmarks as unknown as Types.Array<Types.ObjectId>;

	let isBookmarked = bookmarks.includes(propertyObjectId);

	let message: string;

	if (isBookmarked) {
		// If the property is already bookmarked, remove it
		bookmarks.pull(propertyObjectId);
		message = 'Bookmark Removed';
		isBookmarked = false;
	} else {
		// If the property is not bookmarked, add it
		bookmarks.push(propertyObjectId);
		message = 'Bookmark Added';
		isBookmarked = true;
	}

	await user.save();

	revalidatePath('/properties/saved', 'page');

	return { message, isBookmarked };
}
