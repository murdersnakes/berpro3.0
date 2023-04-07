import React from 'react';
import faqData, { FaqDataTypes } from '../../data/faq';

export default function page() {
	const data: FaqDataTypes[] = faqData;

	return (
		<div className=''>
			<div className='cont py-24 '>
				<h1 className='h2'>Frequently asked questions</h1>
				<ul className='mt-12 grid gid-cols-1 md:grid-cols-2 gap-10'>
					{data.map((faq) => {
						return (
							<li key={faq.id}>
								<h2 className='h4'>{faq.question}</h2>
								<p
									className='prose prose-invert'
									dangerouslySetInnerHTML={{ __html: faq.answer }}
								></p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
