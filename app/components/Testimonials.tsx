"use client";

import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import testimonialData, { TestimonialTypes } from "../../data/testimonials";
import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from "embla-carousel-autoplay";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type PropType = {
  items: TestimonialTypes[];
  options?: EmblaOptionsType;
};

export default function Testimonials(props: PropType) {
  const { items, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  return (
    <div
      className='overflow-hidden bg-gray-300 pt-6 pb-12 md:pt-12 md:pb-24'
      ref={emblaRef}
    >
      <h6 className='h2 text-[var(--body-color)] cont md:text-center mb-6'>
        Testimonials
      </h6>
      <div className='flex cont '>
        {testimonialData.map((item) => {
          return (
            <div
              key={item.id}
              className='relative embla__slide cursor-grab bg-[var(--text-color)] mx-5 text-[var(--body-color)] rounded-lg shadow p-8'
            >
              <div className='absolute top-5 right-5 w-full h-full flex items-start justify-end text-indigo-500/10 text-[10rem]'>
                <FaQuoteLeft />
              </div>
              <h5 className='font-bold p1'>{item.name}</h5>
              <div className='flex items-center gap-1 text-amber-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className='p3 mt-3'>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
