import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaHome, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import contact from '../../data/contactData';

export default function Footer() {
	return (
		<div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
			<div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
				<div className='sm:col-span-2'>
					<Link
						href='/'
						className='h3 font-black uppercase flex items-center'
					>
						<FaHome />
						BER<span className='lowercase italic font-light'>pro</span>
					</Link>
					<div className='mt-6 lg:max-w-sm'>
						<p className='text-sm '>
							SEAI certified BER assessors. We provide a fast, efficient and
							professional service.
						</p>
					</div>
				</div>
				<div className='space-y-2 text-sm'>
					<p className='text-base font-bold tracking-wide '>Contacts</p>
					<div className='flex'>
						<p className='mr-1 '>Phone:</p>
						<Link
							href={`tel:${contact.phone}`}
							aria-label='Our phone'
							title='Our phone'
							className='transition-colors duration-300 hover:text-white'
						>
							{contact.phone}
						</Link>
					</div>
					<div className='flex'>
						<p className='mr-1 '>Email:</p>
						<Link
							href={`mailto:${contact.email}`}
							aria-label='Our email'
							title='Our email'
							className='transition-colors duration-300 hover:text-white'
						>
							{contact.email}
						</Link>
					</div>
					<div className='flex'>
						<p className='mr-1 '>Address:</p>
						<p>Bettystown, Co. Meath.</p>
					</div>
				</div>
				<div>
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
				</div>
			</div>
			<div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
				<p className='text-sm'>
					© Copyright {new Date().getFullYear()} BERpro. All rights reserved.
				</p>
				<ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
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
	);
}
