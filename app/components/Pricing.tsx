import React from 'react';
import Image from 'next/image';
import image from '../../public/arms.webp';

export default function Pricing() {
	return (
		<div className="relative text-dark bg-light">
			<Image
				src={image}
				alt="gloved hand holding an illustration of a house and BER rating scale transparent background"
				className="hidden md:flex py-10 md:py-0 md:absolute md:top-10 md:right-0 md:w-[40%] h-full object-cover object-left-bottom"
			/>
			<div className="cont py-24">
				<div className="flex flex-col lg:flex-row-reverse">
					<div className="mb-4 lg:mb-0 lg:w-1/2 lg:pr-5"></div>
					<div className="lg:w-1/2 text-dark/60">
						<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-acchov3 text-white">
							Pricing
						</p>
						<h2 className=" h2 text-dark">How much does it cost?</h2>
						<p className="p1 leading-relaxed mt-8 ">
							we offer affordable and competitive pricing for our Building
							Energy Rating assessments. Our pricing structure is based on the
							size of the property, with larger properties generally costing
							more to assess.
						</p>

						<p className="p1 leading-relaxed mt-8 ">
							For example, a one-bedroom apartment will typically cost between
							€150 and €175, while a three-bedroom house could cost between €225
							and €325. However, please note that these prices are approximate
							and may vary depending on the specific needs of your property.
						</p>
						<p className="p1 leading-relaxed mt-8">
							We believe in providing our clients with transparent and upfront
							pricing information. That&apos;s why we offer personalised quotes
							based on your individual needs and the size of your property. This
							way, you can have peace of mind knowing exactly what to expect
							when it comes to the cost of our services.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
