import React from 'react';
import Form from '../components/Form';

export default function page() {
	return (
		<div>
			<div className='cont py-24'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
					<div>
						<h1 className='h2'>Contact us</h1>
					</div>
					<Form />
				</div>
			</div>
		</div>
	);
}
