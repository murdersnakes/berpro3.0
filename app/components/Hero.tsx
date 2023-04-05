import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "../../public/hero.webp";

export default function Hero() {
  return (
    <div className='relative h-[600px]'>
      <div className='absolute top-0 left-0 object-cover w-full h-full bg-[var(--body-color)] opacity-75'></div>
      <Image
        src={hero}
        alt='hero image for BER rating'
        className='absolute top-0 left-0 object-cover w-full h-full -z-10'
      />

      <div className='isolate cont h-full flex flex-col justify-center place-self-start'>
        <div className='max-w-2xl'>
          <h1 className='h1'>Get Your BER Cert Now with BERpro.ie</h1>
          <p className='p1 mt-4'>
            Save on energy costs and help the environment. Book a Building
            Energy Rating (BER) assessment with us today.
          </p>
          <div className='mt-6 flex items-center gap-3'>
            <Link href='/' className='btn'>
              Book Now
            </Link>
            <Link href='/' className='btn btn-ghost'>
              More info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
