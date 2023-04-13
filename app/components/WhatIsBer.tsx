import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import hero from "../../public/hero.webp";

export default function WhatIsBer() {
  return (
    <div className='bg-[var(--text-color)] text-[var(--body-color)]'>
      <div className='cont py-24'>
        <div className='flex flex-col max-w-screen-lg overflow-hidden bg-neutral-100 border rounded shadow-sm lg:flex-row sm:mx-auto'>
          <div className='relative lg:w-1/2'>
            <Image
              src={hero}
              alt=''
              className='object-cover w-full lg:absolute h-80 lg:h-full'
            />
            <svg
              className='absolute top-0 right-0 hidden h-full text-neutral-100 lg:inline-block'
              viewBox='0 0 20 104'
              fill='currentColor'
            >
              <polygon points='17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104' />
            </svg>
          </div>
          <div className='flex flex-col justify-center p-8 bg-neutral-100 lg:p-16 lg:pl-10 lg:w-1/2'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-emerald-700'>
                What is BER
              </p>
            </div>
            <h5 className='h2 mb-3'>Building Energy Rating</h5>
            <p className='mb-5 text-neutral-600'>
              <span className='font-bold'>A BER</span> is a measure of a
              building&apos;s energy efficiency and is usually expressed as a
              letter grade ranging from A to G, with A being the most
              energy-efficient and G being the least energy-efficient.
            </p>
            <div className='flex items-center'>
              <Link
                href='/contact'
                type='submit'
                className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-emerald-600 hover:bg-emerald-700 focus:shadow-outline focus:outline-none'
              >
                Get in touch
              </Link>
              <Link
                href='/about-ber'
                aria-label=''
                className='group inline-flex gap-2 items-baseline font-semibold transition-colors duration-200 hover:text-indigo-600'
              >
                Learn More
                <FaChevronRight className='text-xs group-hover:translate-x-2 transition-transform duration-300' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
