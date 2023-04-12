import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "../../public/hero.webp";
import seaiLogo from "../../public/seai_logo.svg";
import { FaChevronRight } from "react-icons/fa";
import Form from "./Form";

export default function Hero() {
  return (
    <div>
      <div className='overflow-hidden bg-[var(--text-color)] text-[var(--body-color)]'>
        <div className='cont py-12'>
          <div className='flex flex-col items-center justify-between xl:flex-row'>
            <div className='w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12'>
              <h2 className='max-w-lg mb-6 h1'>
                Get a <span className='text-emerald-600'>BER Certificate </span>
                <span>Fast</span>{" "}in
                Meath, Louth &amp; Dublin
              </h2>
              <p className='max-w-xl mb-4 p1 text-gray-800 '>
                Need a Building Energy Rating (BER) certificate for selling or
                renting your home? Looking for SEAI grants to upgrade your
                energy systems? BERpro has got you covered.
              </p>
			  <Link href="/about-ber" className="group flex items-center gap-2 link h4 hover:text-[var(--primary-color)]">Learn about BER <FaChevronRight className="group-hover:translate-x-2" size={15}/></Link>
            </div>
            <div className='w-full max-w-xl xl:px-8 xl:w-5/12'>
              <div className='relative'>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
