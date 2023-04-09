import React from 'react';
import '../styles/globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Archivo, Open_Sans } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'BERpro: BER Assessments & Certificates for Energy-Efficient Homes',
	description:
		'BERpro is a BER assessment and certificate provider for energy-efficient homes in Meath, Louth & Dublin. We provide BER assessments and certificates for homes fast.',
	keywords: [
		'BER',
		'BER assessment',
		'BER certificate',
		'energy efficiency',
		'home energy rating',
		'energy performance',
		'DEAP software',
		'energy assessment',
		'BER assessor',
	],

	icons: {
		icon: '/public/favicon.ico',
		shortcut: '/public/favicon.ico',
		apple: '/public/apple-touch-icon.png',
	},
	manifest: '/public/site.webmanifest',
	generator: 'Next.js',
	applicationName: 'BERpro',
	referrer: 'origin-when-cross-origin',
	viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
	authors: { name: "Michael O'Reilly" },
	colorScheme: 'dark',
	creator: "Michael O'Reilly",
	publisher: "Michael O'Reilly",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	themeColor: 'black',
};

const headFont = Archivo({
	subsets: ['latin'],
	variable: '--font-head',
	display: 'swap',
});

const bodyFont = Open_Sans({
	subsets: ['latin'],
	variable: '--font-body',
	display: 'swap',
});

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={`${headFont.variable} ${bodyFont.variable}`}
		>
			<body className='body overflow-x-hidden'>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
