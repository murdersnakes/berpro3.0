import React from 'react';
import policyData from '../../../data/policies';

export default function page({ params }) {
	const { slug } = params;
	const policy = policyData.find((policy) => policy.slug === slug);
	return (
		<div className="text-[var(--body-color)] bg-[var(--text-color)]">
			<div className="cont py-24 ">
				<div
					className="prose prose-h1:h2 prose-h2:h3 prose-p:p1 mx-auto"
					dangerouslySetInnerHTML={{ __html: policy.body }}
				></div>
			</div>
		</div>
	);
}
