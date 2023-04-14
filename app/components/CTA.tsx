import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <div className='bg-dark text-white'>
      <div className='cont py-24 mx-auto '>
        <div className='lg:w-2/3 flex flex-col sm:flex-row items-center justify-center text-center mx-auto'>
          <h2 className='flex-grow sm:pr-16 h2 mb-6 md:mb-0 '>
            Book your BER assessment with us today and start saving money on
            your energy bills.
          </h2>
          <Link
            href='/booking-online'
            aria-label='Book now'
            className='btn-1 whitespace-nowrap '
          >
            Book Online Now
          </Link>
        </div>
      </div>
    </div>
  );
}
