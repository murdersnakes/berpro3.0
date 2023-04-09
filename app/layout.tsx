import React from 'react';
import '../styles/globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Archivo, Open_Sans } from 'next/font/google';

export const metadata = {
	title: 'BERpro: BER Assessments & Certificates for Energy-Efficient Home',
	description:
		'BERpro is a BER assessment and certificate provider for energy-efficient homes. We provide BER assessments and certificates for homes, apartments, and commercial buildings.',
	keywords:
		'BER, BER assessment, BER certificate, energy efficiency, home energy rating, energy performance, DEAP software, energy assessment, BER assessor',
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
