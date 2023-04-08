import React from 'react';
import { FaAddressBook, FaHouseDamage } from 'react-icons/fa';

export default function FactorsEffectingBer() {
	return (
		<div className='text-[var(--body-color)]'>
			<div className='cont py-24'>
				<div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
					<h2 className='max-w-lg mb-4 h2 md:mx-auto'>
						Factors Affecting a BER
					</h2>
					<p className='p1'>
						The rating a property receives can be affected by various factors,
						including:
					</p>
				</div>
				<div className='grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x'>
					<div className='space-y-6 sm:px-16'>
						<div className='flex flex-col max-w-md sm:flex-row'>
							<div className='mb-4 mr-4'>
								<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white'>
									<FaHouseDamage />
								</div>
							</div>
							<div>
								<h6 className='mb-3 text-xl font-bold leading-5'>
									Age of construction
								</h6>
								<p className='text-sm text-gray-900'>
									The age of a building can affect its insulation, ventilation,
									and heating system, making it important for energy efficiency
									assessments.
								</p>
							</div>
						</div>
						<div className='flex flex-col max-w-md sm:flex-row'>
							<div className='mb-4 mr-4'>
								<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white'>
									<FaAddressBook />
								</div>
							</div>
							<div>
								<h6 className='mb-3 text-xl font-bold leading-5'>Floor area</h6>
								<p className='text-sm text-gray-900'>
									The size of a building impacts its energy consumption, and the
									larger the floor area, the more energy it may consume.
								</p>
							</div>
						</div>
						<div className='flex flex-col max-w-md sm:flex-row'>
							<div className='mb-4 mr-4'>
								<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white'>
									<FaAddressBook />
								</div>
							</div>
							<div>
								<h6 className='mb-3 text-xl font-bold leading-5'>
									Default values
								</h6>
								<p className='text-sm text-gray-900'>
									Default values provide a standardised approach to calculating
									energy efficiency and rating in cases where no information is
									available.
								</p>
							</div>
						</div>
						<div className='flex flex-col max-w-md sm:flex-row'>
							<div className='mb-4 mr-4'>
								<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white'>
									<FaAddressBook />
								</div>
							</div>
							<div>
								<h6 className='mb-3 text-xl font-bold leading-5'>
									Thermal insulation
								</h6>
								<p className='text-sm text-gray-900'>
									Proper insulation helps to reduce heat loss, keeping the
									property warm and energy-efficient.
								</p>
							</div>
						</div>
					</div>
					<div className='space-y-6 sm:px-16'>
						<div className='flex flex-col max-w-md sm:flex-row'>
							<div className='mb-4 mr-4'>
								<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white'>
									<FaAddressBook />
								</div>
							</div>
							<div>
								<h6 className='mb-3 text-xl font-bold leading-5'>
									Windows and doors
								</h6>
								<p className='text-sm text-gray-900'>
									Energy-efficient windows and doors reduce heat loss and
									prevent draughts, improving a building&apos;s energy
									efficiency.
								</p>
							</div>
						</div>
						<div className='flex flex-col max-w-md sm:flex-row'>
							<div className='mb-4 mr-4'>
								<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white'>
									<FaAddressBook />
								</div>
							</div>
							<div>
								<h6 className='mb-3 text-xl font-bold leading-5'>
									Heating systems and controls
								</h6>
								<p className='text-sm text-gray-900'>
									Efficient heating systems and controls help to reduce energy
									consumption and improve energy efficiency.
								</p>
							</div>
						</div>
						<div className='flex flex-col max-w-md sm:flex-row'>
							<div className='mb-4 mr-4'>
								<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white'>
									<FaAddressBook />
								</div>
							</div>
							<div>
								<h6 className='mb-3 text-xl font-bold leading-5'>
									Light fittings
								</h6>
								<p className='text-sm text-gray-900'>
									Energy-efficient light fittings can save on electricity bills
									and reduce energy consumption.
								</p>
							</div>
						</div>
						<div className='flex flex-col max-w-md sm:flex-row'>
							<div className='mb-4 mr-4'>
								<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white'>
									<FaAddressBook />
								</div>
							</div>
							<div>
								<h6 className='mb-3 text-xl font-bold leading-5'>Renewables</h6>
								<p className='text-sm text-gray-900'>
									Incorporating renewable energy sources, such as solar panels,
									can help to reduce a building&apos;s reliance on non-renewable
									energy sources and improve its energy rating.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
