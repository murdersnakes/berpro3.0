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
    <div className='bg-[var(--text-color)]'>
      <div className='cont py-24'>
        <div className='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl'>
          <div className='pt-12'>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-emerald-300 text-black'>
              Testimonials
            </p>
          </div>
          <h4 className='max-w-lg mb-4 h2 md:mx-auto text-[var(--body-color)]'>
            See what our customers ar saying
          </h4>
        </div>
        <div className='embla '>
          <div className='embla__viewport' ref={emblaRef}>
            <div className='embla__container'>
              {testimonialData.map((person) => (
                <div
                  className='embla__slide cursor-grab bg-gray-100 text-[var(--body-color)] mr-5 p-10 rounded shadow-xl'
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
    </div>
  );
}
