import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Form from '../components/Form';

export default function page() {
	return (
		<div>
			<div className='cont py-24'>
				<div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10'>
					<div className='flex flex-col items-center justify-center md:justify-start md:items-start max-w-md text-center lg:text-left'>
						<h1 className='h2'>Contact us</h1>
						<p className='p3 mt-4'>
							If you have any queries, fill out our form and we will be in touch
							as soon as possible. Alternatively, feel free to contact us by
							phone or email. We look forward to hearing from you.
						</p>
						<div className='mt-12 flex items-center gap-6'>
							<Link
								className='flex items-center gap-2 h3 hover:text-white transition-colors duration-300'
								href='tel:0896083228'
							>
								<FaPhone /> 0896083228
							</Link>
							<Link
								className='flex items-center gap-2 h3 hover:text-white transition-colors duration-300'
								href='mailto:info@berpro.ie'
							>
								<FaEnvelope /> info@berpro.ie
							</Link>
						</div>
					</div>
					<div className='max-w-md'>
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
}
