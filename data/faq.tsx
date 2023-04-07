const faqData = [
	{
		id: 1,
		question: 'What is a BER assessment?',
		answer:
			"A Building Energy Rating (BER) assessment is an evaluation of the energy efficiency of a property. It provides a rating on a scale of A to G, with A being the most energy-efficient and G being the least efficient. The assessment also includes recommendations for improving the property's energy efficiency.",
	},
	{
		id: 2,
		question: 'Why do I need a BER assessment?',
		answer:
			"A BER assessment is required for all homes that are being sold or rented in Ireland. It is also a valuable tool for homeowners who want to reduce their energy bills and improve their home's energy efficiency.",
	},
	{
		id: 3,
		question: 'How long does a BER assessment take?',
		answer:
			'A typical assessment takes around 1 to 2 hours, depending on the size and complexity of the property. We will arrange a convenient time for the assessment that works for you.',
	},
	{
		id: 4,
		question: 'How much does a BER assessment cost?',
		answer:
			"Our prices vary depending on the size and type of property. Please see our <a href='/pricing'>pricing</a> for a quote based on your specific needs.",
	},
	{
		id: 5,
		question: 'What happens after the assessment?',
		answer:
			" the assessment, we will provide you with a comprehensive report on your property's energy efficiency. The report includes your BER rating, recommendations for improving your energy efficiency, and an estimate of the potential cost savings.",
	},
	{
		id: 6,
		question: 'How long is the BER rating valid?',
		answer:
			'A BER rating is valid for 10 years from the date of the assessment. If you make any significant changes to your property during that time, you may want to consider getting a new assessment to ensure your rating is accurate.',
	},
	{
		id: 7,
		question: 'How do I book a BER assessment?',
		answer:
			"You can book a QQI Accredited Domestic BER Assessment by contacting us at <a href='mailto:info@berpro.ie'>info@berpro.ie</a> or calling us at <a href='tel:0896083228'>0896083228</a>. We will arrange a convenient time for the assessment that works for you.",
	},
	{
		id: 8,
		question: 'Is my personal information secure?',
		answer:
			"Yes, we take the security and privacy of your personal information seriously. We use industry-standard security measures to protect your information and only use it for the purpose of providing our assessment services. For more information, please refer to our <a href='/policies/privacy-policy'>privacy policy</a>.",
	},
];

export default faqData;

export interface FaqDataTypes {
    id: number;
    question: string;
    answer: string;
}
