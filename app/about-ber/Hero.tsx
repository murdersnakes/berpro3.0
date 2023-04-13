import Image from 'next/image';
import React from 'react';
import ratingScale from '../../public/ber_rating_image_2.webp';


export default function Hero() {
	return (
		<div className="text-[var(--body-color)] bg-[var(--text-color)]">
			<div className="cont pt-24 pb-12">
				<div className="grid gap-5 row-gap-8 lg:grid-cols-2">
					<div className="flex flex-col justify-center">
						<div className="max-w-xl mb-6">
							<div>
								<h1 className="inline-block mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
									About Building Energy Rating (BER)
								</h1>
							</div>
							<h2 className="h1 mb-6">
								Understanding the Rating Scale
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
						alt="BER rating scale illustration"
						className='rounded-lg shadow-xl'
						priority
						quality={50}
					/>
				</div>
			</div>
		</div>
	);
}
