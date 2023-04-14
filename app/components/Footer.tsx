import Link from "next/link";
import React from "react";
import logo from "../../public/logo_white.svg";
import {
  FaEnvelope,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaHome,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import contact from "../../data/contactData";
import Image from "next/image";

export default function Footer() {
  return (
    <div className='bg-dark'>
      <div className='cont py-12 '>
        <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-3'>
          <div className='sm:col-span-2'>
            <Link href='/' aria-label='BERpro Logo and link to home page'>
              <Image
                src={logo}
                alt='BERpro Logo'
                className='w-24 object-contain object-center'
              />
            </Link>
            <div className='mt-6 lg:max-w-sm'>
              <p className='p3'>
                SEAI certified BER assessors. We provide a fast, efficient and
                professional service.
              </p>
            </div>
          </div>

          <ul className='h2 flex flex-col justify-around md:items-end  text-neutral-400'>
            <li>
              <Link
                href={`tel:${contact.phone}`}
                aria-label='Our phone'
                title='Our phone'
                className='flex items-center gap-1 transition-colors duration-300 hover:text-white'
              >
                <FaPhone /> {contact.phone}
              </Link>
            </li>
            <li>
              <Link
                href={`mailto:${contact.email}`}
                aria-label='Our email'
                title='Our email'
                className='flex items-center gap-1 transition-colors duration-300 hover:text-white'
              >
                <FaEnvelope /> {contact.email}
              </Link>
            </li>
          </ul>

          {/* Socials */}
          {/* <div>
						<span className='text-base font-bold tracking-wide '>Socials</span>
						<div className='flex items-center mt-1 space-x-3'>
							<Link
								href={contact.twitter}
								aria-label='Our twitter'
								title='Our twitter'
								className=' transition-colors duration-300 hover:text-white'
							>
								<FaTwitter />
							</Link>
							<Link
								href={contact.linkedin}
								aria-label='Our linkedin'
								title='Our linkedin'
								className=' transition-colors duration-300 hover:text-white'
							>
								<FaLinkedinIn />
							</Link>
							<Link
								href={contact.facebook}
								aria-label='Our facebook'
								title='Our facebook'
								className=' transition-colors duration-300 hover:text-white'
							>
								<FaFacebookF />
							</Link>
						</div>
						<p className='mt-4 text-sm '>
							Follow us for the latest industry updates and technologies.
						</p>
					</div> */}
        </div>
        <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
          <p className='p3'>
            © Copyright {new Date().getFullYear()} BERpro. All rights reserved.
          </p>
          <ul className='flex flex-col md:items-center mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row text-gray-300'>
            <li>
              <Link
                href='/frequently-asked-questions'
                aria-label='Our F.A.Q'
                title='Our F.A.Q'
                className='text-sm transition-colors duration-300 hover:text-white'
              >
                F.A.Q
              </Link>
            </li>
            <li>
              <Link
                href='/policies/privacy-policy'
                aria-label='Our Privacy Policy'
                title='Our Privacy Policy'
                className='text-sm transition-colors duration-300 hover:text-white'
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href='/policies/terms-and-conditions'
                aria-label='Our Terms &amp; Conditions'
                title='Our Terms &amp; Conditions'
                className='text-sm transition-colors duration-300 hover:text-white'
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
