import './globals.css';

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar';
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
			<body className='flex flex-col min-h-screen'>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
