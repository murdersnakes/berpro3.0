"use client";

import React from "react";
import testimonialData, { TestimonialTypes } from "../../data/testimonials";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import contact from "../../data/contactData";

export default function Testimonials() {
  return (
    <div className='bg-dark'>
      <div className='px-5 py-12 lg:py-24 lg:px-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 text-light'>
          {testimonialData.map((t: TestimonialTypes) => {
            return (
              <div
                key={t.id}
                className='bg-light/20 p-8 rounded-lg shadow flex flex-col justify-between'
              >
                <p className='p2'>&quot;{t.text}&quot;</p>
                <div className='mt-4'>
                  <p className='h4 text-white'>{t.name}</p>
                  <FaStar className='text-amber-400 inline-block' />
                  <FaStar className='text-amber-400 inline-block' />
                  <FaStar className='text-amber-400 inline-block' />
                  <FaStar className='text-amber-400 inline-block' />
                  <FaStar className='text-amber-400 inline-block' />
                </div>
              </div>
            );
          })}
          <Link
            href={`tel:${contact.phone}`}
            className='bg-amber-400 p-8 rounded-lg shadow flex flex-col justify-center items-center text-dark group hover:-translate-y-2 trans'
          >
            <p className='h2 text-center'>
              Call our team now for your free quote
            </p>

            <div className=' mt-5 h1 text-center group-hover:underline trans'>Tel:{contact.phone}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
