import React from 'react';

export default function CalcVsMeasured() {
	return (
		<div className='bg-[var(--body-color)] text-[var(--text-color)]'>
			<div className='cont py-24 '>
				<div className='max-w-xl mb-10 text-center md:text-left lg:max-w-2xl md:mb-12'>
					<h2 className='max-w-lg mb-4 h2'>
						Calculated Energy Consumption vs. Measured Energy Consumption
					</h2>
					<p className='p1'>
						Building Energy Rating (BER) allows for an objective comparison of
						different dwellings&apos; energy performance, focusing on asset
						(calculated) energy rating rather than operational (measured
						consumption) rating.
					</p>
				</div>
				<div className='flex flex-col border rounded shadow-sm md:justify-center lg:flex-row'>
					<div className='flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2'>
						<div>
							<h5 className='max-w-md mb-6 h2'>
								Calculated Energy Consumption
							</h5>
							<p className='mt-6 mb-2 p3 font-semibold tracking-wide text-indigo-300'>
								Key features include:
							</p>
							<ul className='prose prose-invert list-disc prose-li:marker:text-gray-300'>
								<li>
									Energy usage calculated based on the dwelling, not the number
									of occupants
								</li>
								<li>
									Consistent assumptions made for all dwellings (e.g., lighting
									level, occupants, hot water demand, heating season, and
									temperatures)
								</li>
								<li>
									Suitable for evaluating buildings for regulatory purposes and
									ideal for properties being sold or rented
								</li>
							</ul>
							<p className='mt-6 mb-2 p3 font-semibold tracking-wide text-indigo-300'>
								However, there are some drawbacks:
							</p>
							<ul className='prose prose-invert list-disc prose-li:marker:text-gray-300'>
								<li>
									Energy bills may differ from the asset rating depending on the
									occupant&apos;s energy usage habits
								</li>
								<li>
									Requires a detailed survey of the dwelling&apos;s fabric and
									heating system
								</li>
							</ul>
						</div>
					</div>

					<div className='flex flex-col justify-between p-5 sm:p-10 lg:w-1/2'>
						<div>
							<h5 className='max-w-md mb-6 h2'>Measured Energy Consumption</h5>
							<p className='mt-6 mb-2 p3 font-semibold tracking-wide text-indigo-300'>
								Key features include:
							</p>
							<ul className='prose prose-invert list-disc prose-li:marker:text-gray-300'>
								<li>
									Actual energy usage measured based on bills or monitored data
								</li>
								<li>
									No need to identify building components, and standardised
									assumptions are not relevant
								</li>
							</ul>
							<p className='mt-6 mb-2 p3 font-semibold tracking-wide text-indigo-300'>
								Advantages include:
							</p>
							<ul className='prose prose-invert list-disc prose-li:marker:text-gray-300'>
								<li>
									Reflects actual energy usage and does not require a detailed
									survey of dwelling fabric and heating system
								</li>
							</ul>
							<p className='mt-6 mb-2 p3 font-semibold tracking-wide text-indigo-300'>
								Disadvantages include:
							</p>
							<ul className='prose prose-invert list-disc prose-li:marker:text-gray-300'>
								<li>
									Difficulty comparing properties on a like-for-like basis for
									prospective buyers or tenants
								</li>
								<li>
									Highly dependent on occupants&apos; behaviour and not suitable
									for demonstrating compliance with regulatory requirements
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
