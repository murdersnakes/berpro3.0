import Image from 'next/image';
import React from 'react';
import ratingScale from '../../public/rating_scale.svg';
import aIcon from '../../public/a_rating_icon_1.svg';
import gIcon from '../../public/g_rating_icon_1.svg';

export default function Hero() {
	return (
		<div className='text-[var(--body-color)]'>
			<div className='cont pt-24 pb-12'>
				<div className='grid gap-5 row-gap-8 lg:grid-cols-2'>
					<div className='flex flex-col justify-center'>
						<div className='max-w-xl mb-6'>
							<div>
								<h1 className='inline-block mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
									About Building Energy Rating (BER)
								</h1>
							</div>
							<h2 className='h1 mb-6'>
								<h2>Understanding the Rating Scale</h2>
							</h2>

							<p>
								Building Energy Rating (BER) is a crucial tool for potential
								buyers or tenants to objectively compare the energy performance
								of various dwellings on a level playing field. It helps in
								comprehending a property&apos;s energy efficiency and acts as an
								indicator of the running costs and carbon emissions associated
								with maintaining a comfortable temperature within the home.
							</p>
						</div>
					</div>
					<Image
						src={ratingScale}
						alt='BER rating scale illustration'
					/>
				</div>
			</div>

			<div className='cont pt-12 pb-24'>
				<div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
					<h2 className='max-w-lg mb-4 h2 md:mx-auto'>
						A Familiar Rating Scale
					</h2>
					<p className='text-base text-gray-700 md:text-lg'>
						Similar to the energy rating labels found on household appliances,
						the BER scale rates homes from A to G, where:
					</p>
				</div>
				<div className='grid gap-8 row-gap-12 lg:grid-cols-2'>
					<div className='max-w-md sm:mx-auto sm:text-center'>
						<div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24'>
							<Image
								src={aIcon}
								alt='a rating icon for BER'
							/>
						</div>

						<p className='mb-3 text-sm text-gray-900'>
							A-rated homes are the most energy-efficient and comfortable,
							generally having the lowest energy bills.
						</p>
					</div>
					<div className='max-w-md sm:mx-auto sm:text-center'>
						<div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24'>
							<Image
								src={gIcon}
								alt='g rating icon for BER'
							/>
						</div>

						<p className='mb-3 text-sm text-gray-900'>
							G-rated homes are the least energy-efficient, typically requiring
							a significant amount of energy for heating and resulting in the
							highest energy bills.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
