import React from 'react';

export default function Form() {
	return (
		<div className='w-full text-[var(--body-color)]'>
			<div className='bg-neutral-100 rounded shadow-2xl p-7 sm:p-10'>
				<h2 className='mb-4  sm:text-center sm:mb-6 h3'>Book an appointment</h2>
				<form>
					<div className='mb-1 sm:mb-2'>
						<label
							htmlFor='firstName'
							className='inline-block mb-1 p2'
						>
							First name
						</label>
						<input
							placeholder='Joe'
							aria-label='First name'
							required
							type='text'
							className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[var(--primary-color)] focus:outline-none focus:shadow-outline'
							id='firstName'
							name='firstName'
						/>
					</div>
					<div className='mb-1 sm:mb-2'>
						<label
							htmlFor='lastName'
							className='inline-block mb-1 p2'
						>
							Last name
						</label>
						<input
							placeholder='Bloggs'
							aria-label='Last name'
							required
							type='text'
							className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[var(--primary-color)] focus:outline-none focus:shadow-outline'
							id='lastName'
							name='lastName'
						/>
					</div>
					<div className='mb-1 sm:mb-2'>
						<label
							htmlFor='email'
							className='inline-block mb-1 p2'
						>
							E-mail
						</label>
						<input
							placeholder='joe.bloggs@example.ie'
							aria-label='E-mail'
							required
							type='text'
							className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[var(--primary-color)] focus:outline-none focus:shadow-outline'
							id='email'
							name='email'
						/>
					</div>
					<div className='mt-4 mb-2 sm:mb-4'>
						<button
							type='submit'
							aria-label='Submit'
							className='inline-flex items-center justify-center w-full h-12 px-6 p1 tracking-wide text-white transition duration-200 rounded shadow-md bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] focus:shadow-outline focus:outline-none'
						>
							Submit
						</button>
					</div>
					<p className='p4'>
						We respect your privacy and will never share your information
					</p>
				</form>
			</div>
		</div>
	);
}
