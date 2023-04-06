import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <div className="bg-emerald-400">
      <div className='cont py-12 mx-auto '>
        <div className='lg:w-2/3 flex flex-col sm:flex-row items-center justify-center text-center mx-auto'>
          <h1 className='flex-grow sm:pr-16 h3 text-[var(--body-color)]'>
            Book your BER assessment with us today and start saving money on your
            energy bills.
          </h1>
          <Link
            href='/bookings'
            className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'
          >
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
}
