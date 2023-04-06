import Link from "next/link";
import React from "react";
import { FaFacebookF, FaHome, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='sm:col-span-2'>
          <Link href='/' className='h3 font-black uppercase flex items-center'>
            <FaHome />
            BER<span className='lowercase italic font-light'>pro</span>
          </Link>
          <div className='mt-6 lg:max-w-sm'>
            <p className='text-sm '>
              SEAI certified BER assessors. We provide a fast, efficient and
              professional service.
            </p>
            <p className='mt-4 text-sm '>
              Dedicated to providing a high quality service to our customers.
            </p>
          </div>
        </div>
        <div className='space-y-2 text-sm'>
          <p className='text-base font-bold tracking-wide '>
            Contacts
          </p>
          <div className='flex'>
            <p className='mr-1 '>Phone:</p>
            <a
              href='tel:850-123-5021'
              aria-label='Our phone'
              title='Our phone'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              850-123-5021
            </a>
          </div>
          <div className='flex'>
            <p className='mr-1 '>Email:</p>
            <a
              href='mailto:info@lorem.mail'
              aria-label='Our email'
              title='Our email'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              info@lorem.mail
            </a>
          </div>
          <div className='flex'>
            <p className='mr-1 '>Address:</p>
            <Link
              href='https://www.google.com/maps'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Our address'
              title='Our address'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              312 Lovely Street, NY
            </Link>
          </div>
        </div>
        <div>
          <span className='text-base font-bold tracking-wide '>
            Social
          </span>
          <div className='flex items-center mt-1 space-x-3'>
            <Link
              href='/'
              className=' transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              <FaTwitter /> 
            </Link>
            <Link
              href='/'
              className=' transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href='/'
              className=' transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              <FaFacebookF />
            </Link>
          </div>
          <p className='mt-4 text-sm '>
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
          </p>
        </div>
      </div>
      <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
        <p className='text-sm'>
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
          <li>
            <Link
              href='/'
              className='text-sm transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              F.A.Q
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-sm transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-sm transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
