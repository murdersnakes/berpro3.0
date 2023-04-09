import Image from 'next/image';
import React from 'react';
import image1 from '../../public/struggling.svg';
import image2 from '../../public/worried.svg';
import image3 from '../../public/solution.svg';

export default function Pain() {
	return (
		<div>
			<div className=''>
				<div className='py-24 bg-neutral-300 text-[var(--body-color)]'>
					<div className=' cont  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center '>
						<Image
							src={image1}
							alt='confused woman about BER illustration'
							className='w-full px-[17%] lg:px-[22%]'
						/>
						<div className='text-center lg:text-left '>
							<h2 className='h2'>
								Moving house, renting or retrofitting? We can help you with your
								mandatory BER assessment.
							</h2>
							<p className='p2 mt-3 '>
								A Building Energy Rating (BER) is a mandatory requirement when a
								property is offered for sale or rent. In the event that you
								intend to sell or rent a property, a Building Energy Rating
								(BER) is an essential prerequisite. We strive to simplify the
								entire process for you, ensuring a hassle-free experience.
							</p>
						</div>
					</div>
				</div>

				<div className='relative py-24 text-[var(--body-color)]'>
					<div className='bg-svg-1 absolute top-0 right-0 w-full h-full -z-10 '></div>
					<div className='cont grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div className='text-center lg:text-left row-start-2 lg:row-start-1'>
							<h2 className='h2'>
								Increasing energy bills becoming more and more difficult to keep
								up with?
							</h2>
							<p className='p2 mt-3'>
								Data from CSO&apos;s 2022 Survey of Income and Living Conditions
								revealed that 377,000 people in Ireland couldn&apos;t afford adequate
								heating, compared to 160,000 in 2021. Due to the energy crisis,
								about 73% of Irish people have changed their daily habits at
								home to save on energy costs.
							</p>
						</div>
						<Image
							src={image2}
							alt='Confused woman at lightbulb illustration'
							className='w-full px-[17%] lg:px-[22%]'
						/>
					</div>
				</div>

				<div className='py-24 bg-[var(--body-color)]'>
					<div className='cont grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<Image
							src={image3}
							alt='confident man about green energy illustration'
							className='w-full px-[17%] lg:px-[22%]'
						/>
						<div className='text-center lg:text-left '>
							<h2 className='h2'>
								That&apos;s where{' '}
								<span className='uppercase font-bold text-[var(--text-color-hover)]'>
									BER<span className='lowercase italic light'>pro</span>
								</span>{' '}
								comes in! We offer professional assessments to help you identify
								savings on energy costs.
							</h2>
							<p className='p2 text-gray-300 mt-3'>
								BERpro is a leading provider of professional energy assessments
								that can help you identify ways to save on your energy costs.
								Our experts will assess your property and provide tailored
								solutions to help you reduce your energy consumption and
								expenses.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
