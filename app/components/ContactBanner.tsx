'use client';

import React, { useState, useEffect } from 'react';
import contact from '../../data/contactData';
import Link from 'next/link';

export default function ContactBanner() {
	const [isOpaque, setIsOpaque] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			setIsOpaque(scrollTop > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 z-40 w-full bg-amber-400 text-dark h4 py-1 trans ${
				isOpaque == true ? 'bg-opacity-50 bg-white' : 'bg-opacity-100'
			}`}
		>
			<Link
				className="block text-center py-1 px-2 cont hover:text-acc2 trans underline"
				href={`tel:${contact.phone}`}
			>
				Call us now: {contact.phone}
			</Link>
		</div>
	);
}
