'use server';

import Property from '@/models/Property';
import cloudinary from '@/config/cloudinary';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

export default async function deleteProperty(propertyId: string) {
	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error('User ID is required');
	}

	const { userId } = sessionUser;

	const property = await Property.findById(propertyId);

	if (!property) {
		throw new Error('Property not found');
	}

	// Check if the user is the owner of the property
	if (String(property.owner) !== userId) {
		throw new Error('You are not authorized to delete this property');
	}

	// Extract public ID from the image URLs
	const publicIds = property.images.map((imageUrl) => {
		const parts = imageUrl.split('/');
		return parts.at(-1)?.split('.').at(0) ?? '';
	});

	// Delete images from Cloudinary
	if (publicIds.length > 0) {
		for (const publicId of publicIds) {
			await cloudinary.uploader.destroy('skyline/' + publicId);
		}
	}

	revalidatePath('/', 'layout');

	await property.deleteOne();
}
