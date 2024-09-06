'use server';

import Property from '@/models/Property';
import connectDB from '@/config/database';
import { getSessionUser } from '@/utils/getSessionUser';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

interface UpdatePropertyProps {
	propertyId: string;
}

export default async function updateProperty(
	{ propertyId }: UpdatePropertyProps,
	formData: FormData
) {
	await connectDB();

	const sessionUser = await getSessionUser();

	if (!sessionUser || !sessionUser.userId) {
		throw new Error('User ID is required');
	}

	const { userId } = sessionUser;

	const existingProperty = await Property.findById(propertyId);

	// Verify that the user is the owner of the property
	if (String(existingProperty?.owner) !== userId) {
		throw new Error('Current user is not the owner of the property');
	}

	const propertyData = new Property({
		owner: userId,
		type: formData.get('type') as string | null,
		name: formData.get('name') as string | null,
		description: formData.get('description') as string | null,
		location: {
			street: formData.get('location.street') as string | null,
			city: formData.get('location.city') as string | null,
			state: formData.get('location.state') as string | null,
			zipcode: formData.get('location.zipcode') as string | null,
		},
		beds: formData.get('beds') ? Number(formData.get('beds')) : null,
		baths: formData.get('baths') ? Number(formData.get('baths')) : null,
		square_feet: formData.get('square_feet')
			? Number(formData.get('square_feet'))
			: null,
		amenities: formData.getAll('amenities') as string[] | null,
		rates: {
			nightly: formData.get('rates.nightly')
				? Number(formData.get('rates.nightly'))
				: null,
			weekly: formData.get('rates.weekly')
				? Number(formData.get('rates.weekly'))
				: null,
			monthly: formData.get('rates.monthly')
				? Number(formData.get('rates.monthly'))
				: null,
		},
		seller_info: {
			name: formData.get('seller_info.name') as string | null,
			email: formData.get('seller_info.email') as string | null,
			phone: formData.get('seller_info.phone') as string | null,
		},
		images: existingProperty?.images || null,
	});

	const updatedProperty = await Property.findByIdAndUpdate(
		propertyId,
		propertyData
	);

	revalidatePath('/', 'layout');
	redirect(`/properties/${updatedProperty?._id}`);
}
