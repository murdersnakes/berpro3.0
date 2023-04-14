import Image from "next/image";
import React from "react";
import ratingScale from "../../public/ber_rating_image_2.webp";
import aIcon from "../../public/a_rating_icon_1.svg";
import gIcon from "../../public/g_rating_icon_1.svg";

export default function Hero() {
  return (
    <div className='text-dark bg-light'>
      <div className='cont py-24'>
        <div className='grid gap-5 row-gap-8 lg:grid-cols-2'>
          <div className='row-start-2 lg:col-start-1 lg:row-start-1 flex flex-col justify-center'>
            <div className='max-w-xl mb-6'>
              <div>
                <h1 className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-dark uppercase rounded-full bg-amber-400'>
                  About Building Energy Rating (BER)
                </h1>
              </div>
              <h2 className='h1 mb-6 text-black'>
                Understanding the Rating Scale
              </h2>

              <p className='text-dark/60 p1'>
                Building Energy Rating (BER) is a crucial tool for potential
                buyers or tenants to objectively compare the energy performance
                of various dwellings on a level playing field. It helps in
                comprehending a property&apos;s energy efficiency and acts as an
                indicator of the running costs and carbon emissions associated
                with maintaining a comfortable temperature within the home.
              </p>
            </div>
            <div className='grid gap-8 row-gap-12 lg:grid-cols-2'>
              <div className='mx-auto`` w-full'>
                <Image
                  src={aIcon}
                  alt='a rating icon for BER'
                  className='w-16 h-16 sm:w-24 sm:h-24 mb-3'
                />

                <p className='p2 text-dark/75'>
                  A-rated homes are the most energy-efficient and comfortable,
                  generally having the lowest energy bills.
                </p>
              </div>
              <div className=' mx-auto w-full'>
                <Image
                  src={gIcon}
                  alt='g rating icon for BER'
                  className='w-16 h-16 sm:w-24 sm:h-24 mb-3'
                />

                <p className='p2 text-dark/75'>
                  G-rated homes are the least energy-efficient, typically
                  requiring a significant amount of energy for heating and
                  resulting in the highest energy bills.
                </p>
              </div>
            </div>
          </div>
          <Image
            src={ratingScale}
            alt='BER rating scale illustration'
            className='rounded-lg shadow-xl'
            priority
            quality={50}
          />
        </div>
      </div>
    </div>
  );
}
