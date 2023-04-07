import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import hero from '../../public/hero.webp';
import seaiLogo from '../../public/seai_logo.svg';
import { FaChevronRight } from 'react-icons/fa';
import Form from './Form';

export default function Hero() {
	return (
		<div className='relative'>
			<Image
				src={hero}
				className='absolute object-cover w-full h-full grayscale'
				alt='hero image for BER pro energy saving website'
			/>
			<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-300 to-neutral-700/10 '></div>
			<div className='relative [var(--body-color)]'>
				<div className='relative cont py-24 grid grid-cols-1 md:grid-cols-2 gap-10'>
					<div className=''>
						<Image
							src={seaiLogo}
							alt='SEAI logo'
							className='grayscale'
						/>
						<h1 className='mt-12 max-w-lg mb-6 h1 font-black text-[var(--body-color)]'>
							QQI Accredited Domestic{' '}
							<span className='text-indigo-600'>BER Assessor</span>
						</h1>
						<p className='max-w-xl mb-4 p1 text-[var(--body-color)]'>
							Get a comprehensive report fast. Affordable QQI
							Accredited Domestic BER Assessment service available in Meath,
							Louth, and Dublin.
						</p>
						<Link
							href='/'
							aria-label=''
							className='inline-flex items-center p2 tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700'
						>
							Learn more
							<FaChevronRight className='inline-block w-3 h-3 ml-2' />
						</Link>
					</div>
					<div className='max-w-md'>
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
}
