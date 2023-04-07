import React from 'react';

export default function Form() {
	return (
		<div className='w-full max-w-xl xl:px-8 xl:w-5/12 text-[var(--body-color)]'>
			<div className='bg-neutral-100 rounded shadow-2xl p-7 sm:p-10'>
				<h3 className='mb-4  sm:text-center sm:mb-6 h3'>Book an appointment</h3>
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
							className='inline-flex items-center justify-center w-full h-12 px-6 p1 tracking-wide text-[var(--text-color)] transition duration-200 rounded shadow-md bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] focus:shadow-outline focus:outline-none'
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
