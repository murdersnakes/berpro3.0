import Link from 'next/link';
import React from 'react';

export default function Pricing() {
	return (
		<div className="text-[var(--body-color)] bg-emerald-400">
			<div className="cont py-24 ">
				<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<div>
						<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-emerald-800 text-[var(--text-color)]">
							Our Pricing
						</p>
					</div>
					<h2 className="max-w-lg mb-4 h2 md:mx-auto">
						Pricing varies based on your home
					</h2>
					<p className="p1">
						Choose the plan that&apos;s right for you. We also offer a next day
						option for a BER cert in a hurry.
					</p>
				</div>

				<div className="grid gap-10 row-gap-5 sm:row-gap-10 lg:grid-cols-4 sm:mx-auto">
					<div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-[var(--text-color)] border border-emerald-700 rounded shadow-sm sm:items-center hover:shadow">
						<div className="text-center">
							<div className="h2">Express</div>
							<div className="flex items-center justify-center mt-2">
								<div className="mr-1 h1">€499</div>
							</div>
							<div className="mt-2 space-y-3 p3">
								<div className="">Guaranteed Next Day Service</div>
								<div className="">Official SEAI Cert & Report</div>
								<div className="">Includes SEAI Charges</div>
							</div>
						</div>
						<div>
							<Link
								href="/"
								className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							>
								Book Now
							</Link>
							<p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
								If you need an expert report & BER cert fast
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-[var(--text-color)] border border-emerald-700 rounded shadow-sm sm:items-center hover:shadow">
						<div className="text-center">
							<div className="h2">4 beds +</div>
							<div className="flex items-center justify-center mt-2">
								<div className="mr-1 h1">€329</div>
							</div>
							<div className="mt-2 space-y-3 p3">
								<div className="">Flexible Scheduling Options</div>
								<div className="">Official SEAI Cert & Report</div>
								<div className="">Includes SEAI Charges</div>
							</div>
						</div>
						<div>
							<Link
								href="/"
								className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							>
								Book Now
							</Link>
							<p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Comprehensive assessment of energy efficiency in large homes
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-[var(--text-color)] border border-emerald-700 rounded shadow-sm sm:items-center hover:shadow">
						<div className="text-center">
							<div className="h2">3 beds</div>
							<div className="flex items-center justify-center mt-2">
								<div className="mr-1 h1">€269</div>
							</div>
							<div className="mt-2 space-y-3 p3">
								<div className="">Flexible Scheduling Options</div>
								<div className="">Official SEAI Cert & Report</div>
								<div className="">Includes SEAI Charges</div>
							</div>
						</div>
						<div>
							<Link
								href="/"
								className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							>
								Book Now
							</Link>
							<p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Comprehensive assessment of energy efficiency in homes & apartments
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-[var(--text-color)] border border-emerald-700 rounded shadow-sm sm:items-center hover:shadow">
						<div className="text-center">
							<div className="h2">2 beds</div>
							<div className="flex items-center justify-center mt-2">
								<div className="mr-1 h1">€229</div>
							</div>
							<div className="mt-2 space-y-3 p3">
								<div className="">Flexible Scheduling Options</div>
								<div className="">Official SEAI Cert & Report</div>
								<div className="">Includes SEAI Charges</div>
							</div>
						</div>
						<div>
							<Link
								href="/"
								className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							>
								Book Now
							</Link>
							<p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Comprehensive assessment of energy efficiency in homes & apartments
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
