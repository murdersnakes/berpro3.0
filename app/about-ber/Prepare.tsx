import Link from 'next/link';
import React from 'react';
import { IoIosPaper, IoIosCheckmark, IoIosHome } from 'react-icons/io';

export default function Prepare() {
	return (
		<div className='text-[var(--text-color)] bg-[var(--body-color)]'>
			<div className='cont py-24'>
				<div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-24'>
					<div>
						<p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-300 uppercase rounded-full bg-teal-accent-400'>
							The BER Assessment Process
						</p>
					</div>
					<h4 className='max-w-lg mb-6 h2 md:mx-auto'>
						Preparing for Your Assessment
					</h4>
					<p className='p2'>
						A BER assessor collects all necessary information during an
						assessment of your home. They survey each room in the house,
						including the attic and garage (if applicable), and record the data
						in a survey form. Following the survey, your BER assessor completes
						various calculations and inputs the information gathered into the{' '}
						<Link
							className='link-2'
							target='_blank'
							href='https://www.seai.ie/home-energy/building-energy-rating-ber/support-for-ber-assessors/software/deap/'
						>
							DEAP software
						</Link>
						, which calculates the annual energy usage for heating, lighting,
						and ventilating the property.
					</p>
				</div>
				<div className='grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-2'>
					<div className='flex flex-col sm:flex-row'>
						<div className='sm:mr-4'>
							<div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full text-indigo-300 bg-[var(--body-color-hover)] text-2xl'>
								<IoIosPaper />
							</div>
						</div>
						<div>
							<h5 className='mb-2 h3'>Gather Relevant Paperwork</h5>

							<ul className='mb-4 -ml-1 space-y-2 p3'>
								<li className='flex items-start'>
									<span className='mr-1'>
										<IoIosCheckmark />
									</span>
									MPRN number and Eircode
								</li>
								<li className='flex items-start'>
									<span className='mr-1'>
										<IoIosCheckmark />
									</span>
									Previous BER assessments, if applicable
								</li>
								<li className='flex items-start'>
									<span className='mr-1'>
										<IoIosCheckmark />
									</span>
									Proof of the home&apos;s construction year, plans,
									specifications, and extension ages
								</li>
								<li className='flex items-start'>
									<span className='mr-1'>
										<IoIosCheckmark />
									</span>
									Documentation for upgrade works, such as certifications,
									receipts, and invoices
								</li>
								<li className='flex items-start'>
									<span className='mr-1'>
										<IoIosCheckmark />
									</span>
									Boiler and heat source information
								</li>
								<li className='flex items-start'>
									<span className='mr-1'>
										<IoIosCheckmark />
									</span>
									Certifications for windows and doors
								</li>
								<li className='flex items-start'>
									<span className='mr-1'>
										<IoIosCheckmark />
									</span>
									Results of air tightness tests
								</li>
							</ul>
						</div>
					</div>
					<div className='flex flex-col sm:flex-row'>
						<div className='sm:mr-4'>
							<div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full text-indigo-300 bg-[var(--body-color-hover)] text-2xl'>
								<IoIosHome />
							</div>
						</div>
						<div>
							<h5 className='mb-2 h3'>Prepare Your Home</h5>

							<ul className='mb-4 -ml-1 space-y-2 p3'>
								<li className='flex items-start'>
									<span className='mr-1'>
										<IoIosCheckmark />
									</span>
									Provide safe and clear access to all areas of your home
								</li>
								<li className='flex items-start'>
									<span className='mr-1'>
										<IoIosCheckmark />
									</span>
									Complete home improvements before scheduling your assessment
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
