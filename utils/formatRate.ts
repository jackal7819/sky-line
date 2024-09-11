type RatePeriod = 'monthly' | 'weekly' | 'nightly';

type Rates = {
	monthly?: number;
	weekly?: number;
	nightly?: number;
};

type PeriodConfig = {
	key: RatePeriod;
	suffix: string;
};

export const formatRate = (rates: Rates) => {
	const periods: PeriodConfig[] = [
		{ key: 'monthly', suffix: '/mo' },
		{ key: 'weekly', suffix: '/wk' },
		{ key: 'nightly', suffix: '/night' },
	];

	for (const { key, suffix } of periods) {
		if (rates[key]) {
			return `${rates[key].toLocaleString()}${suffix}`;
		}
	}

	return '';
};
