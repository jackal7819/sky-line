'use server';

export default async function addProperty(formData: FormData) {
	// const property = Object.fromEntries(formData) as Record<string, string>;
	// const response = await fetch('http://localhost:3000/api/properties', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify(property),
	// });
	// const data = await response.json();
	// return data;
	console.log(formData.get('name'));
}
