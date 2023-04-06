import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "../../public/hero.webp";
import seaiLogo from "../../public/seai_logo.svg";
import { FaChevronRight } from "react-icons/fa";
import Form from "./Form";

export default function Hero() {
  return (
    <div className='relative'>
      <Image
        src={hero}
        className='absolute object-cover w-full h-full grayscale'
        alt='hero image for BER pro energy saving website'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-300 to-neutral-700/10 '></div>
      <div className='relative  [var(--body-color)]'>
        <div className='relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='flex flex-col items-center justify-between xl:flex-row'>
            <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
              <Image src={seaiLogo} alt='SEAI logo' className='grayscale' />
              <h1 className='mt-6 max-w-lg mb-6 h1 font-black text-[var(--body-color)]'>
                Get Your <span className="italic text-[var(--primary-color)]">BER Cert</span> Now and Save on ⚡Energy Costs
              </h1>
              <p className='max-w-xl mb-4 p1 text-[var(--body-color)]'>
                Book a Building Energy Rating (BER) assessment with us today and start your journey to a more energy efficient home.
              </p>
              <Link
                href='/'
                aria-label=''
                className='inline-flex items-center p2 tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700'
              >
                Learn more
                <FaChevronRight className='inline-block w-3 h-3 ml-2' />
              </Link>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
