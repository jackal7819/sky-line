import 'react-toastify/dist/ReactToastify.css';

import './globals.css';

import AuthProvider from '@/components/AuthProvider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { GlobalProvider } from '@/context/GlobalContext';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

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
		<AuthProvider>
			<GlobalProvider>
				<html lang='en'>
					<body className='flex flex-col min-h-screen'>
						<Navbar />
						<main className='grid flex-grow'>{children}</main>
						<Footer />
						<ToastContainer position='top-left' />
					</body>
				</html>
			</GlobalProvider>
		</AuthProvider>
	);
}
