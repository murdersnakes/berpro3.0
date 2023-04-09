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
					<div className='max-w-lg text-[var(--body-color)]'>
						<Image
							src={seaiLogo}
							alt='SEAI logo'
							className='grayscale'
						/>
						<h1 className='mt-12  mb-6 h1 leading-none'>
							Get a <span className='text-indigo-600'>BER Cert Fast</span>
							<br />
							<span className='h2'>in Meath, Louth & Dublin</span>
						</h1>
						<p className='max-w-xl mt-6 mb-4 p1'>
							Need a Building Energy Rating (BER) certificate for selling or
							renting your home? Looking for SEAI grants to upgrade your energy
							systems? BERpro has got you covered.
						</p>
					</div>
					<div className='max-w-md'>
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
}
