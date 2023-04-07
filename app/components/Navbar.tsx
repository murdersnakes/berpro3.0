'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import {
	FaHome,
	FaBriefcase,
	FaEnvelope,
	FaBook,
	FaBars,
	FaTimes,
	FaSortAmountUpAlt,
} from 'react-icons/fa';

const navlinks = [
	{
		name: 'Home',
		link: '/',
		icon: <FaHome />,
	},
	{
		name: 'About BER',
		link: '/about-ber',
		icon: <FaSortAmountUpAlt />,
	},
	{
		name: 'Blog',
		link: '/blog',
		icon: <FaBook />,
	},
	{
		name: 'Contact',
		link: '/contact',
		icon: <FaEnvelope />,
	},
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='relative bg-[var(--body-color)] bg-opacity-90'>
			<button
				onClick={(e) => setIsOpen(!isOpen)}
				className={
					isOpen ? 'absolute min-h-screen w-full top-0 right-0 z-40' : 'hidden'
				}
			></button>
			<div className='cont flex justify-between py-2'>
				<Link
					href='/'
					className='h3 font-black uppercase flex items-center'
				>
					<FaHome />
					BER<span className='lowercase italic font-light'>pro</span>
				</Link>
				<button
					onClick={handleMenu}
					className='flex p-3 md:hidden justify-center items-center rounded bg-[var(--body-color-hover)] bg-opacity-50'
				>
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>
				<ul
					className={`absolute top-full right-0 w-1/2 py-12 rounded-bl-lg shadow-xl md:shadow-none space-y-3 md:space-y-0 md:py-1 md:relative md:min-h-fit md:w-auto md:translate-x-0 md:flex bg-[var(--body-color)] text-[var(--text-color)] z-40 ease-out duration-500 ${
						isOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					{navlinks.map((link) => {
						return (
							<li
								key={link.name}
								className='ml-4'
							>
								<Link
									href={link.link}
									className='flex px-4 py-3 items-center gap-1 rounded hover:bg-[var(--body-color-hover)] '
								>
									{link.icon}
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
