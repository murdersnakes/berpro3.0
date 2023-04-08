import React from 'react';
import { FaBolt, FaCheck, FaFile, FaMoneyBill } from 'react-icons/fa';

export default function Benefits() {
	return (
		<div className='bg-gray-300 text-[var(--body-color)]'>
			<div className='cont py-24'>
				<div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
					<div>
						<p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-800 uppercase rounded-full bg-teal-accent-400'>
							Why Choose Us?
						</p>
					</div>
					<h2 className='max-w-lg mb-6 h2 md:mx-auto'>
						Benefits of Choosing BERpro for Your Energy Assessments
					</h2>
					<p className='text-base text-gray-700 md:text-lg'>
						BERpro offers fast, easy, accurate, and budget-friendly assessments
						for a Building Energy Rating (BER) certificate, enabling you to sell
						or rent your home and access SEAI grants for retrofitting.
					</p>
				</div>
				<div className='grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2'>
					<div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
						<div className='mr-4'>
							<div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-700 text-[var(--text-color)]'>
								<FaBolt />
							</div>
						</div>
						<div>
							<h6 className='mb-3 h3 font-bold leading-5'>Fast and Easy</h6>
							<p className='mb-3 p3'>
								At BERpro, we understand that your time is valuable. That&apos;s
								why we strive to make our energy assessments as fast and easy as
								possible. Our certified energy assessors use the latest
								technology to quickly and accurately assess your property&apos;s
								energy efficiency. We also work around your schedule, so you can
								get your assessment done at a time that&apos;s convenient for
								you.
							</p>
						</div>
					</div>
					<div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
						<div className='mr-4'>
							<div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-700 text-[var(--text-color)]'>
								<FaCheck />
							</div>
						</div>
						<div>
							<h6 className='mb-3 h3 font-bold leading-5'>
								Accurate and Reliable
							</h6>
							<p className='mb-3 p3'>
								We take pride in providing accurate and reliable energy
								assessments for our clients. Our team of certified energy
								assessors are highly trained and use state-of-the-art equipment
								and software to ensure that your assessments are done to the
								highest standards. This means that you can trust our assessments
								to be an accurate reflection of your property&apos;s energy
								efficiency.
							</p>
						</div>
					</div>
					<div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
						<div className='mr-4'>
							<div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-700 text-[var(--text-color)]'>
								<FaMoneyBill />
							</div>
						</div>
						<div>
							<h6 className='mb-3 h3 font-bold leading-5'>Low-Cost</h6>
							<p className='mb-3 p3'>
								At BERpro, we believe that everyone should have access to
								affordable energy assessments. That&apos;s why we offer low-cost
								assessments without sacrificing quality or accuracy. We believe
								in transparent pricing, and we will always provide you with a
								detailed quote before starting any work.
							</p>
						</div>
					</div>
					<div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
						<div className='mr-4'>
							<div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-700 text-[var(--text-color)]'>
								<FaFile />
							</div>
						</div>
						<div>
							<h6 className='mb-3 h3 font-bold leading-5'>
								Comprehensive Reports
							</h6>
							<p className='mb-3 p3'>
								We provide comprehensive reports that give you a detailed
								analysis of your property&apos;s energy performance. Our reports
								are easy to understand and include recommendations for improving
								your property&apos;s energy efficiency, as well as estimated
								cost savings from implementing these recommendations. Our
								assessors are available to answer any questions you may have
								about the report and provide additional guidance as needed.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
