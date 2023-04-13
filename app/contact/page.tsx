import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import contact from "../../data/contactData";
import image from "../../public/phone.webp";

export default function page() {
  return (
    <div className='relative min-h-[80vh] grid text-[var(--body-color)]'>
      <Image
        src={image}
        alt='black rotary telephone'
        className='absolute w-full h-full object-cover grayscale'
      />
	  <div className="absolute w-full h-full top-0 right-0 bg-[var(--body-color)] opacity-70"></div>
      <div className='isolate place-self-center flex flex-col items-center justify-center p-8 bg-neutral-300/90 rounded-lg shadow-xl'>
        <h1 className='h1'>Contact us</h1>
        <p className='p1'>If you have any queries please let us know</p>
        <div className='flex gap-6 mt-5'>
          <Link
            href={`tel:${contact.phone}`}
            className='p-2 bg-[var(--body-color)] text-[var(--text-color)] flex items-center gap-2 h3 rounded hover:bg-indigo-600 hover:shadow-xl transition-all duration-300'
          >
            <FaPhoneAlt />
            {contact.phone}
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            className='p-2 bg-[var(--body-color)] text-[var(--text-color)] flex items-center gap-2 h3 rounded hover:bg-indigo-600 hover:shadow-xl transition-all duration-300'
          >
            <FaEnvelope />
            {contact.email}
          </Link>
        </div>
      </div>
    </div>
  );
}
