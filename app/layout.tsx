import React from 'react';
import '../styles/globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Archivo, Open_Sans } from 'next/font/google';
import { Metadata } from 'next';

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
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	viewport: 'width=device-width, initial-scale=1',
	generator: 'Next.js',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	authors: { name: "Michael O' Reilly" },
	colorScheme: 'dark',
	creator: "Michael O' Reilly",
	publisher: "Michael O' Reilly",
	formatDetection: {
		email: true,
		address: true,
		telephone: true,
	},
	openGraph: {
		title: 'BERpro: BER Assessments & Certificates for Energy-Efficient Homes',
		description:
			'BERpro is a BER assessment and certificate provider for energy-efficient homes in Meath, Louth & Dublin. We provide BER assessments and certificates for homes fast.',
		url: 'https://berpro.ie',
		siteName: 'BERpro.ie',
		images: [
			{
				url: '../public/hero.webp',
				width: 800,
				height: 600,
			},
			{
				url: '../public/hero.webp',
				width: 1800,
				height: 1600,
				alt: 'My custom alt',
			},
		],
		locale: 'en-IE',
		type: 'website',
	},
	icons: {
		icon: {url: '../public/favicon.ico', type: 'image/x-icon'},
		shortcut: '../public/favicon.ico',
		apple: '../public/apple-touch-icon.png',
	},
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
			lang="en"
			className={`${headFont.variable} ${bodyFont.variable}`}
		>
			<body className="body overflow-x-hidden">
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
