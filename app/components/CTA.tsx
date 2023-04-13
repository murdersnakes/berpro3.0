import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <div className='bg-[var(--body-color)] '>
      <div className='cont py-24 mx-auto '>
        <div className='lg:w-2/3 flex flex-col sm:flex-row items-center justify-center text-center mx-auto'>
          <h1 className='flex-grow sm:pr-16 h3 text-white'>
            Book your BER assessment with us today and start saving money on
            your energy bills.
          </h1>
          <Link
            href='/bookings'
            aria-label='Book now'
            className='flex-shrink-0 text-white bg-emerald-600 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-700 rounded text-lg mt-10 sm:mt-0 font-bold '
          >
            Book Online Now
          </Link>
        </div>
      </div>
    </div>
  );
}
