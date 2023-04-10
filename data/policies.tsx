

const policyData = [
	{
		id: 1,
        slug: 'terms-and-conditions',
		title: 'Terms and Conditions',
		body: "<p>Thank you for choosing BERpro, where we provide quality energy efficiency assessment services for homeowners in Meath, Louth, and Dublin. By using our services, you agree to comply with the following terms and conditions:</p><h3>1. Service Agreement</h3><p>Upon booking our QQI Accredited Domestic BER Assessment service, you agree to provide accurate and complete information about your property. You also agree to provide access to your property during the scheduled assessment date and time. Failure to comply may result in cancellation or additional charges.</p><h3>2. Payment</h3><p>Payment for our services is due at the time of assessment. We accept cash, bank transfer, and online payments. Prices are subject to change without prior notice.</p><h3>3. Cancellation and Refund Policy</h3><p>Cancellations made 24 hours before the scheduled assessment time will not incur any charges. Cancellations made less than 24 hours before the scheduled time may result in a cancellation fee. Refunds are not available after the assessment has been completed.</p><h3>4. Liability and Warranty</h3><p>BERpro is not liable for any damages or losses resulting from the assessment, including but not limited to property damage or personal injury. Our assessments are based on the information provided and are not a guarantee of energy savings. We do not offer any warranties or guarantees, expressed or implied.</p><h3>5. Privacy Policy</h3><p>We are committed to protecting your privacy. We collect and use your personal information only for the purpose of providing our services. For more information, please refer to our <a href='/policies/privacy-policy'>privacy policy</a>.</p><p>For any questions or concerns, please contact us at <a href='mailto:info@berpro.ie'>info@berpro.ie</a> or call us at <a href='tel:0896083228'>0896083228</a>.</p>",
	},
	{
		id: 2,
        slug: 'privacy-policy',
		title: 'Privacy Policy',
		body: "<p>At BERpro, we are committed to protecting your privacy. This privacy policy explains how we collect and use your personal information when you use our services.</p><h3>1. Information we collect</h3><p>When you book our QQI Accredited Domestic BER Assessment service, we may collect personal information such as your name, address, email address, and phone number. We may also collect information about your property such as the age, size, and type of construction.</p><h3>2. How we use your information</h3><p>We use your personal information to provide our assessment services, communicate with you about your assessment, and process payments. We may also use your information to improve our services and for internal record-keeping purposes.</p><h3>3. Sharing your information</h3><p>We do not share your personal information with third parties, except as necessary to provide our services, comply with legal obligations, or enforce our terms and conditions.</p><h3>4. Security</h3><p>We take reasonable precautions to protect your personal information from unauthorized access, disclosure, or destruction. We use industry-standard security measures to safeguard your information.</p><h3>5. Retention of information</h3><p>We retain your personal information only for as long as necessary to provide our services and as required by law. We securely dispose of your information when it is no longer needed.</p><h3>6. Your rights</h3><p>You have the right to access, correct, and delete your personal information. You may also object to or restrict the processing of your information. Please contact us at <a href='mailto:info@berpro.ie'>info@berpro.ie</a> or call us at <a href='tel:0896083228'>0896083228</a> if you have any questions or concerns about your privacy rights.</p><h3>7. Changes to this policy</h3><p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website.</p><p>If you have any questions or concerns about our privacy policy, please contact us at <a href='mailto:info@berpro.ie'>info@berpro.ie</a> or call us at <a href='tel:0896083228'>0896083228</a>.</p>",
	},
];

export default policyData;

export interface PolicyType {
    id: number;
    slug: string;
    title: string;
    body: string;
}
