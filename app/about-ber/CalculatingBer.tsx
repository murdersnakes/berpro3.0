import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image1 from '../../public/iso_standard_1.svg';
import image2 from '../../public/compare.svg';

export default function CalculatingBer() {
	return (
		<div className='text-[var(--body-color)] bg-[var(--text-color)]'>
			<div className='relative py-24'>
				<div className='relative cont  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center '>
					<Image
						src={image1}
						alt='iso standard illustration'
						className='w-full '
					/>
					<div className='text-center lg:text-left '>
						<h4 className='h2'>Calculating a BER</h4>
						<p className='p2 mt-3 '>
							A BER is determined by the amount of energy a home requires for
							space and hot water heating, ventilation, and lighting. The
							calculation utilises the Dwelling Energy Assessment Procedure
							(DEAP), Ireland&apos;s official method for calculating a
							dwelling&apos;s BER. The DEAP calculation framework is based on{' '}
							<Link
								href='https://www.iso.org/standard/41974.html#:~:text=ISO%2013790%3A2008%20gives%20calculation,to%20as%20%E2%80%9Cthe%20building%E2%80%9D.'
								className='link-2'
								target='_blank'
							>
								ISO EN 13790
							</Link>{' '}
							and heavily relies on the calculation and data used for the energy
							rating of dwellings in the UK.
						</p>
					</div>
				</div>
			</div>

			<div className='relative py-24'>
				<div className='cont grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<div className='text-center lg:text-left row-start-2 lg:row-start-1'>
						<h4 className='h2'>On a like-for-like basis</h4>
						<p className='p2 mt-3'>
							The BER energy rating focuses on the building itself, its fabric,
							and installed systems, rather than the energy consumption of the
							occupants. This allows prospective buyers or tenants to
							objectively compare the energy performance of different dwellings
							on a like-for-like basis.
						</p>
					</div>
					<Image
						src={image2}
						alt='comparing houses is easier with BER illustration'
						className='w-full'
					/>
				</div>
			</div>
		</div>
	);
}
