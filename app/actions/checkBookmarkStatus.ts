'use server';

import User from '@/models/User';
import connectDB from '@/config/database';
import { Types } from 'mongoose';
import { getSessionUser } from '@/utils/getSessionUser';

interface BookmarkStatus {
	isBookmarked: boolean;
}

export default async function checkBookmarkStatus(
	propertyId: string
): Promise<BookmarkStatus> {
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

	const isBookmarked = bookmarks.includes(propertyObjectId);

	return { isBookmarked };
}
