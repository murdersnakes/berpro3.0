'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import {
	FaHome,
	FaEnvelope,
	FaBook,
	FaBars,
	FaTimes,
	FaSortAmountUpAlt,
} from 'react-icons/fa';
import logo from '../../public/logo_official_white.svg';

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
		name: 'Booking Online',
		link: '/booking-online',
		icon: <FaBars />,
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
	const menuRef = useRef(null);

	const handleClickOutside = (e) => {
		if (menuRef.current && !menuRef.current.contains(e.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const [isOpen, setIsOpen] = useState(false);

	const handleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative bg-dark text-light">
			<div className="cont flex justify-between items-center py-2">
				<Link
					href="/"
					aria-label="Berpro, Back to homepage"
					title="Berpro, Back to homepage"
					className="w-16 aspect-square object-contain object-center"
				>
					<Image
						src={logo}
						alt="BERpro Logo"
						className="w-36 object-contain object-center"
					/>
				</Link>
				<button
					onClick={handleMenu}
					aria-label="Open Menu"
					title="Open Menu"
					className="flex p-3 md:hidden justify-center items-center rounded bg-light text-dark"
				>
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>
				<ul
					ref={menuRef}
					className={`absolute top-full right-0 w-full py-12 md:py-1 shadow-xl md:shadow-none space-y-3 md:space-y-0  md:relative md:min-h-fit md:w-auto bg-light md:bg-dark text-dark md:text-light z-30 trans ${
						isOpen ? 'block' : 'hidden'
					}   md:flex`}
				>
					{navlinks.map((link) => {
						return (
							<li
								key={link.name}
								className=""
							>
								<Link
									href={link.link}
									aria-label={link.name}
									title={link.name}
									className="flex px-4 whitespace-nowrap py-2 items-center gap-1 h4 text-xs rounded hover:bg-[var(--text-color)] border-2 border-transparent hover:border-black hover:text-black transition-all"
									onClick={() => setIsOpen(false)}
								>
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
