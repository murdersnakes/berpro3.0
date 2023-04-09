import Link from 'next/link';
import React from 'react';

export default function WhyChooseUs() {
	return (
		<div>
			<div>
				<h2>Why Choose BERpro?</h2>
				<p>
					At BERpro, our experienced assessors are dedicated to providing
					accurate, reliable, and professional Building Energy Rating
					assessments. We understand the importance of energy efficiency for
					property owners and tenants alike and strive to deliver a
					comprehensive service that meets your needs.
				</p>
				<p>Our services include:</p>
				<ul>
					<li>
						Thorough property assessments conducted by qualified, experienced
						BER assessors
					</li>
					<li>
						Clear communication and guidance throughout the assessment process
					</li>
					<li>
						Assistance in understanding your BER and identifying potential areas
						for improvement
					</li>
					<li>
						Recommendations on how to enhance your property&apos;s energy
						efficiency and increase your BER
					</li>
				</ul>
				<p>
					With BERpro, you can trust that you&apos;re working with a reputable,
					knowledgeable team that prioritises your satisfaction and the accuracy
					of your Building Energy Rating.{' '}
					<Link
						href='/contact'
						className='link-2'
					>
						Contact us
					</Link>{' '}
					today to schedule your assessment and take the first step towards a
					more energy-efficient future.
				</p>
			</div>
		</div>
	);
}
