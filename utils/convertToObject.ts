export default function convertToObject(
	leanDocument: Record<string, any>
): Record<string, any> {
	for (const key of Object.keys(leanDocument)) {
		if (
			typeof leanDocument[key] === 'object' &&
			leanDocument[key] !== null &&
			'toJSON' in leanDocument[key] &&
			'toString' in leanDocument[key]
		) {
			leanDocument[key] = leanDocument[key].toString();
		}
	}
	return leanDocument;
}
