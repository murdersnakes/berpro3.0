

const blogPosts = [
	{
		id: 1,
		content:
			"<h1>How to Prepare Your Paperwork for a Successful BER Assessment</h1><p>If you are planning to have a Building Energy Rating (BER) assessment for your property, it is important to prepare all necessary paperwork and documents in advance. This will not only help you receive your BER certificate and advisory report in a timely manner but also ensure that you achieve the best possible rating for your property. Here are some tips on how to prepare your paperwork for a successful BER assessment.</p><h2>Gather All Necessary Documentation</h2><p>For a new building assessment, your assessor will need a significant amount of documentation. This includes wall, roof, and floor specifications as well as copies of certificates of performance for any construction products and appliances installed in the property. It is recommended that you gather all this information well in advance of your assessment.</p><p>If you are having an assessment for an existing building, you will need to provide documentation of any upgrade works done to your property. This includes certifications, receipts, invoices, and specification documents from the architect, engineer, or contractor who managed the works. Any documentation regarding the original construction of the dwelling will also be helpful.</p><p>Make sure that all documents clearly indicate the address of the property, the works carried out, and the products used. This will ensure that your assessor has all the necessary information to accurately assess the energy performance of your property.</p><h2>Use Default Values Only as a Last Resort</h2><p>In the absence of sufficient documentation, your BER assessor will have to use default values. These values are based on the construction type and age of the building and may result in a lower BER rating than expected. Therefore, it is crucial to provide your assessor with as much documentation as possible.</p><p>Your BER assessor can advise you on the paperwork required to support your BER assessment. You can also download a homeowner's checklist to assist you in gathering the necessary documentation. Remember to retain a copy of all information and documentation supporting the inputs in your BER. This will be important information to have for any subsequent BER ratings.</p><h2>Conclusion</h2><p>Preparing your paperwork in advance of your BER assessment is essential for achieving the best possible rating for your property. Make sure to gather all necessary documentation, including certifications, receipts, invoices, and specification documents. Avoid default values whenever possible by providing your assessor with sufficient documentation. With proper preparation, you can achieve a high BER rating and improve the energy efficiency of your property.</p>",
		title: 'How to Prepare Your Paperwork for a Successful BER Assessment',
		slug: 'how-to-prepare-your-paperwork-for-a-successful-ber-assessment',
		date: '09 Jul 2021',
		image: "hero.webp",
        author:"Michael O'Reilly",
		excerpt:
			'If you are planning to have a Building Energy Rating (BER) assessment for your property, it is important to prepare all necessary paperwork and documents in advance. This will not only help you receive your BER certificate and advisory report in a timely manner but also ensure that you achieve the best possible rating for your property. Here are some tips on how to prepare your paperwork for a successful BER assessment.',
		keywords:
			"BER assessment, paperwork preparation, building energy rating, energy efficiency, documentation, certifications, receipts, invoices, specification documents, default values, construction type, age of the building, homeowner's checklist, energy efficiency, energy performance, energy rating",
	},
	{
		id: 2,
		content:
			"<h1>How to Prepare Your Paperwork for a Successful BER Assessment</h1><p>If you are planning to have a Building Energy Rating (BER) assessment for your property, it is important to prepare all necessary paperwork and documents in advance. This will not only help you receive your BER certificate and advisory report in a timely manner but also ensure that you achieve the best possible rating for your property. Here are some tips on how to prepare your paperwork for a successful BER assessment.</p><h2>Gather All Necessary Documentation</h2><p>For a new building assessment, your assessor will need a significant amount of documentation. This includes wall, roof, and floor specifications as well as copies of certificates of performance for any construction products and appliances installed in the property. It is recommended that you gather all this information well in advance of your assessment.</p><p>If you are having an assessment for an existing building, you will need to provide documentation of any upgrade works done to your property. This includes certifications, receipts, invoices, and specification documents from the architect, engineer, or contractor who managed the works. Any documentation regarding the original construction of the dwelling will also be helpful.</p><p>Make sure that all documents clearly indicate the address of the property, the works carried out, and the products used. This will ensure that your assessor has all the necessary information to accurately assess the energy performance of your property.</p><h2>Use Default Values Only as a Last Resort</h2><p>In the absence of sufficient documentation, your BER assessor will have to use default values. These values are based on the construction type and age of the building and may result in a lower BER rating than expected. Therefore, it is crucial to provide your assessor with as much documentation as possible.</p><p>Your BER assessor can advise you on the paperwork required to support your BER assessment. You can also download a homeowner's checklist to assist you in gathering the necessary documentation. Remember to retain a copy of all information and documentation supporting the inputs in your BER. This will be important information to have for any subsequent BER ratings.</p><h2>Conclusion</h2><p>Preparing your paperwork in advance of your BER assessment is essential for achieving the best possible rating for your property. Make sure to gather all necessary documentation, including certifications, receipts, invoices, and specification documents. Avoid default values whenever possible by providing your assessor with sufficient documentation. With proper preparation, you can achieve a high BER rating and improve the energy efficiency of your property.</p>",
		title: 'Some other blog post',
		slug: 'some-other-blog-post',
		date: '22 Sep 2021',
		image: "hero.webp",
        author:"Michael O'Reilly",
		excerpt:
			'If you are planning to have a Building Energy Rating (BER) assessment for your property, it is important to prepare all necessary paperwork and documents in advance. This will not only help you receive your BER certificate and advisory report in a timely manner but also ensure that you achieve the best possible rating for your property. Here are some tips on how to prepare your paperwork for a successful BER assessment.',
		keywords:
			"BER assessment, paperwork preparation, building energy rating, energy efficiency, documentation, certifications, receipts, invoices, specification documents, default values, construction type, age of the building, homeowner's checklist, energy efficiency, energy performance, energy rating",
	},
];

export default blogPosts;

export interface BlogPostType {
	id: number;
	content: string;
	title: string;
	slug: string;
	date: string;
	image: {
        hero: string;
    };
	excerpt: string;
	keywords: string;
    author: string;
}
