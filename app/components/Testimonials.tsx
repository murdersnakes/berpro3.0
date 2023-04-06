"use client";

import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import testimonialData, { TestimonialTypes } from "../../data/testimonials";
import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from "embla-carousel-autoplay";
import { FaStar } from "react-icons/fa";

type PropType = {
  item: TestimonialTypes;
  options?: EmblaOptionsType;
};

export default function Testimonials(props: PropType) {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  return (
    <div className='overflow-hidden bg-gray-300' ref={emblaRef}>
      <div className='flex cont py-24'>
        {testimonialData.map((item) => {
          return (
            <div
              key={item.id}
              className='embla__slide cursor-grab bg-[var(--text-color)] mx-5 text-[var(--body-color)] rounded-lg shadow p-8'
            >
              <h5 className='font-bold'>{item.name}</h5>
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
