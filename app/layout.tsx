import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sky Line | Find The Perfect Rental',
	description:
		'Your trusted partner in finding dream homes and lucrative property investments.',
	keywords: 'rental, property, homes, investment, dream homes, sky line',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
