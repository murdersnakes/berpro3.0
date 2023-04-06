import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "../../public/hero.webp";
import { FaChevronRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className='relative'>
      <Image
        src={hero}
        className='absolute inset-0 object-cover w-full h-full'
        alt='hero image for BER pro energy saving website'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-[var(--body-color)] opacity-75'></div>
      <div className='relative  [var(--body-color)]'>
        <svg
          className='absolute inset-x-0 -bottom-1 text-[var(--body-color)]'
          viewBox='0 0 1160 163'
        >
          <path
            fill='currentColor'
            d='M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z'
          />
        </svg>
        <div className='relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='flex flex-col items-center justify-between xl:flex-row'>
            <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-medium tracking-tight text-white sm:text-4xl sm:leading-none'>
                Get Your BER Cert Now
                <br />
                and Save on Energy Costs
              </h2>
              <p className='max-w-xl mb-4 text-base text-gray-200 md:text-lg'>
                Save on energy costs and help the environment. Book a Building
                Energy Rating (BER) assessment with us today.
              </p>
              <Link
                href='/'
                aria-label=''
                className='inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700'
              >
                Learn more
                <FaChevronRight className='inline-block w-3 h-3 ml-2' />
              </Link>
            </div>
            <div className='w-full max-w-xl xl:px-8 xl:w-5/12 text-[var(--body-color)]'>
              <div className='bg-[var(--text-color)] rounded shadow-2xl p-7 sm:p-10'>
                <h3 className='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
                  Book an appointment
                </h3>
                <form>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='firstName'
                      className='inline-block mb-1 font-medium'
                    >
                      First name
                    </label>
                    <input
                      placeholder='John'
                      required
                      type='text'
                      className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                      id='firstName'
                      name='firstName'
                    />
                  </div>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='lastName'
                      className='inline-block mb-1 font-medium'
                    >
                      Last name
                    </label>
                    <input
                      placeholder='Doe'
                      required
                      type='text'
                      className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                      id='lastName'
                      name='lastName'
                    />
                  </div>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='email'
                      className='inline-block mb-1 font-medium'
                    >
                      E-mail
                    </label>
                    <input
                      placeholder='john.doe@example.org'
                      required
                      type='text'
                      className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                      id='email'
                      name='email'
                    />
                  </div>
                  <div className='mt-4 mb-2 sm:mb-4'>
                    <button
                      type='submit'
                      className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-[var(--text-color)] transition duration-200 rounded shadow-md bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] focus:shadow-outline focus:outline-none'
                    >
                      Submit
                    </button>
                  </div>
                  <p className='text-xs text-gray-600 sm:text-sm'>
                    We respect your privacy and will never share your
                    information
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
