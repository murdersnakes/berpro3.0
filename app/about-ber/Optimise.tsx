import React from 'react';
import { MdSolarPower } from 'react-icons/md';
import { CgTemplate } from 'react-icons/cg';
import { TbDoor } from 'react-icons/tb';
import { AiFillControl } from 'react-icons/ai';
import { HiLightBulb } from 'react-icons/hi';
import { FaToolbox } from 'react-icons/fa';

export default function Optimise() {
	return (
		<div className='text-[var(--body-color)] bg-[var(--text-color)]'>
			<div className='cont py-24'>
				<div className='flex flex-col lg:flex-row'>
					<div className='max-w-xl pr-16 mx-auto mb-10'>
						<h5 className='mb-6 h2'>Optimising Your Building Energy Rating</h5>
						<p className='mb-6 p2'>
							Improving your property&apos;s Building Energy Rating (BER) can
							lead to a more comfortable living environment, reduced energy
							bills, and increased property value. Here are some key aspects to
							consider when aiming to enhance your property&apos;s energy
							efficiency:
						</p>
					</div>
					<div className='grid gap-5 row-gap-5 sm:grid-cols-2'>
						<div className='max-w-md'>
							<div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-800 text-[var(--text-color)] text-2xl'>
								<CgTemplate />
							</div>
							<h6 className='h4'>Insulation</h6>
							<p className='p3'>
								Properly insulating your home&apos;s walls, roof, and floor can
								significantly reduce heat loss and enhance energy efficiency.
								Insulation materials and techniques have improved over the
								years, so upgrading your home&apos;s insulation can make a
								notable difference in your BER.
							</p>
						</div>
						<div className='max-w-md'>
							<div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-800 text-[var(--text-color)] text-2xl'>
								<TbDoor />
							</div>
							<h6 className='h4'>Windows and Doors</h6>
							<p className='p3'>
								Upgrading to double or triple-glazed windows and sealing doors
								can prevent up to 10% of your home&apos;s heat loss. Choose
								windows and doors with low U-values and solar transmittance
								values to improve energy efficiency.
							</p>
						</div>
						<div className='max-w-md'>
							<div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-800 text-[var(--text-color)] text-2xl'>
								<AiFillControl />
							</div>
							<h6 className='h4'>Heating Systems and Controls</h6>
							<p className='p3'>
								Replacing older, inefficient boilers with modern condensing
								boilers or heat pumps can increase energy efficiency. Adding
								heating controls, such as programmable thermostats and zoning
								controls, can further optimise energy usage.
							</p>
						</div>
						<div className='max-w-md'>
							<div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-800 text-[var(--text-color)] text-2xl'>
								<HiLightBulb />
							</div>
							<h6 className='h4'>Lighting</h6>
							<p className='p3'>
								Utilising energy-efficient light bulbs in fixed lighting
								fixtures can lower your calculated energy usage and improve your
								BER. LED bulbs are a popular choice due to their efficiency and
								long lifespan.
							</p>
						</div>
						<div className='max-w-md'>
							<div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-800 text-[var(--text-color)] text-2xl'>
								<MdSolarPower />
							</div>
							<h6 className='h4'>Renewable Energy Systems</h6>
							<p className='p3'>
								Installing renewable energy systems, such as photovoltaics (PV),
								solar water heating, heat pumps, biomass, or wind energy, can
								significantly improve your BER. Ensure you provide your BER
								assessor with relevant documentation and certification for any
								installed renewable systems.
							</p>
						</div>
						<div className='max-w-md'>
							<div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-800 text-[var(--text-color)] text-2xl'>
								<FaToolbox />
							</div>
							<h6 className='h4'>Regular Maintenance</h6>
							<p className='p3'>
								Regularly maintaining your heating system, insulation, and other
								energy-related aspects of your home can help maintain or improve
								your BER over time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
