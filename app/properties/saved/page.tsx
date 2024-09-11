import Property from '@/models/Property';
import PropertyCard from '@/components/PropertyCard';
import User from '@/models/User';
import connectDB from '@/config/database';
import { getSessionUser } from '@/utils/getSessionUser';

export default async function SavedPropertyPage() {
	await connectDB();

	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error('User ID is required');
	}

	const { userId } = sessionUser;

	const user = await User.findById(userId).populate('bookmarks');

	if (!user) {
		throw new Error('User not found');
	}

	const bookmarkIds = user.bookmarks;

	const bookmarkedProperties = await Property.find({
		_id: { $in: bookmarkIds },
	}).lean();

	return (
		<section className='py-6'>
			<div className='px-2 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
				<h1 className='mb-6 text-3xl font-semibold'>
					Saved Properties
				</h1>
				{bookmarkedProperties.length === 0 ? (
					<p>No properties saved</p>
				) : (
					<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
						{bookmarkedProperties.map((property) => (
							<PropertyCard
								key={String(property._id)}
								property={property}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
