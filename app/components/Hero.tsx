import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import hero from '../../public/hero.webp';
import seaiLogo from '../../public/seai_logo.svg';
import { FaChevronRight } from 'react-icons/fa';
import Form from './Form';

export default function Hero() {
	return (
		<div>
			<div className="overflow-hidden bg-gray-900">
				<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="flex flex-col items-center justify-between xl:flex-row">
						<div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
							<h2 className="max-w-lg mb-6 h1">
								Get a comprehensive{' '}
								<span className="text-emerald-400">BER Certificate </span>
								<span>Fast in Meath, Louth &amp; Dublin</span>
							</h2>
							<p className="max-w-xl mb-4 p1 text-gray-400 ">
								Need a Building Energy Rating (BER) certificate for selling or
								renting your home? Looking for SEAI grants to upgrade your
								energy systems? BERpro has got you covered.
							</p>
						</div>
						<div className="w-full max-w-xl xl:px-8 xl:w-5/12">
							<div className="relative">
								<Form />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
