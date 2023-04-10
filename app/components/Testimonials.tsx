'use client';

import React from 'react';
import '../../styles/carousel.min.css';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import testimonialData, { TestimonialTypes } from '../../data/testimonials';
import Autoplay, {
	AutoplayType,
	AutoplayOptionsType,
} from 'embla-carousel-autoplay';
import { FaStar } from 'react-icons/fa';

type PropType = {
	options?: EmblaOptionsType;
	Autoplay: AutoplayType;
	AutoplayOptions?: AutoplayOptionsType;
};

export default function Testimonials(props: PropType) {
	const { options } = props;
	const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

	return (
		<div className='embla text-[var(--text-color) bg-indigo-700'>
			<div
				className='embla__viewport'
				ref={emblaRef}
			>
				<div className='embla__container'>
					{testimonialData.map((person) => (
						<div
							className='embla__slide cursor-grab bg-indigo-800 mr-5 p-5 rounded'
							key={person.id}
						>
							<div className='embla__slide__number'>
								<span className='p1'>{person.name}</span>
								<div className=' flex items-center gap-1'>
									<FaStar className='text-yellow-400' />
									<FaStar className='text-yellow-400' />
									<FaStar className='text-yellow-400' />
									<FaStar className='text-yellow-400' />
									<FaStar className='text-yellow-400' />
								</div>
								<p className='p2 mt-2'>{person.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
