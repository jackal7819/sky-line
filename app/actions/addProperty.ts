'use server';

export default async function addProperty(formData: FormData) {
	// Access all values from amenities and images
	const amenities = formData.getAll('amenities') as string[];
	const images = formData
		.getAll('images')
		.filter((image) => image instanceof File && image.name !== '')
		.map((image) => (image instanceof File ? image.name : ''));

	const propertyData = {
		type: formData.get('type'),
		name: formData.get('name'),
		description: formData.get('description'),
		location: {
			street: formData.get('location.street'),
			city: formData.get('location.city'),
			state: formData.get('location.state'),
			zipcode: formData.get('location.zipcode'),
		},
		beds: formData.get('beds'),
		baths: formData.get('baths'),
		square_feet: formData.get('square_feet'),
		amenities,
		rates: {
			nightly: formData.get('rates.nightly'),
			weekly: formData.get('rates.weekly'),
			monthly: formData.get('rates.monthly'),
		},
		seller_info: {
			name: formData.get('seller_info.name'),
			email: formData.get('seller_info.email'),
			phone: formData.get('seller_info.phone'),
		},
		images,
	};
}

// 'use server';

// interface PropertyData {
// 	type: string | null;
// 	name: string | null;
// 	description: string | null;
// 	location: {
// 		street: string | null;
// 		city: string | null;
// 		state: string | null;
// 		zipcode: string | null;
// 	};
// 	beds: number | null;
// 	baths: number | null;
// 	square_feet: number | null;
// 	amenities: string[];
// 	rates: {
// 		nightly: number | null;
// 		weekly: number | null;
// 		monthly: number | null;
// 	};
// 	seller_info: {
// 		name: string | null;
// 		email: string | null;
// 		phone: string | null;
// 	};
// 	images: string[];
// }

// export default async function addProperty(formData: FormData) {
// 	// Access all values from amenities and images
// 	const amenities = formData.getAll('amenities') as string[];
// 	const images = formData
// 		.getAll('images')
// 		.filter((image) => image instanceof File && image.name !== '')
// 		.map((image) => (image instanceof File ? image.name : ''));

// 	const propertyData: PropertyData = {
// 		type: formData.get('type') as string | null,
// 		name: formData.get('name') as string | null,
// 		description: formData.get('description') as string | null,
// 		location: {
// 			street: formData.get('location.street') as string | null,
// 			city: formData.get('location.city') as string | null,
// 			state: formData.get('location.state') as string | null,
// 			zipcode: formData.get('location.zipcode') as string | null,
// 		},
// 		beds: formData.get('beds') ? Number(formData.get('beds')) : null,
// 		baths: formData.get('baths') ? Number(formData.get('baths')) : null,
// 		square_feet: formData.get('square_feet')
// 			? Number(formData.get('square_feet'))
// 			: null,
// 		amenities,
// 		rates: {
// 			nightly: formData.get('rates.nightly')
// 				? Number(formData.get('rates.nightly'))
// 				: null,
// 			weekly: formData.get('rates.weekly')
// 				? Number(formData.get('rates.weekly'))
// 				: null,
// 			monthly: formData.get('rates.monthly')
// 				? Number(formData.get('rates.monthly'))
// 				: null,
// 		},
// 		seller_info: {
// 			name: formData.get('seller_info.name') as string | null,
// 			email: formData.get('seller_info.email') as string | null,
// 			phone: formData.get('seller_info.phone') as string | null,
// 		},
// 		images,
// 	};
// }
