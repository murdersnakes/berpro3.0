"use client";

import React from "react";
import "../../styles/carousel.min.css";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import testimonialData, { TestimonialTypes } from "../../data/testimonials";
import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from "embla-carousel-autoplay";
import { FaStar } from "react-icons/fa";

type PropType = {
  options?: EmblaOptionsType;
  Autoplay: AutoplayType;
  AutoplayOptions?: AutoplayOptionsType;
};

export default function Testimonials(props: PropType) {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className='bg-[var(--text-color)] pb-24'>
      <div className='embla'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container '>
            {testimonialData.map((person) => (
              <div
                className='embla__slide'
                key={person.id}
              >
                <div className='embla__slide__number'>
                  <span className='h4'>{person.name}</span>
                  <div className=' flex items-center gap-1'>
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                  </div>
                  <p className='p3 mt-2'>{person.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
