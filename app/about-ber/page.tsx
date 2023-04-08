import Link from 'next/link';
import React from 'react';
import CalculatingBer from './CalculatingBer';
import CalcVsMeasured from './CalcVsMeasured';
import FactorsEffectingBer from './FactorsEffectingBer';
import Hero from './Hero';

export default function page() {
	return (
		<div className='bg-[var(--text-color)]'>
			<Hero />
			<CalcVsMeasured />
			<CalculatingBer />
			<FactorsEffectingBer />
			<div className='cont py-24'>
				<div className='prose prose-li:marker:text-[var(--body-color)] mx-auto'>
					<h1>About Building Energy Rating (BER)</h1>
					<h2>Understanding the Rating Scale</h2>
					<p>
						Building Energy Rating (BER) is a crucial tool for potential buyers
						or tenants to objectively compare the energy performance of various
						dwellings on a level playing field. It helps in comprehending a
						property&apos;s energy efficiency and acts as an indicator of the
						running costs and carbon emissions associated with maintaining a
						comfortable temperature within the home.
					</p>
					<p>
						Similar to the energy rating labels found on household appliances,
						the BER scale rates homes from A to G, where:
					</p>
					<ul>
						<li>
							A-rated homes are the most energy-efficient and comfortable,
							generally having the lowest energy bills.
						</li>
						<li>
							G-rated homes are the least energy-efficient, typically requiring
							a significant amount of energy for heating and resulting in the
							highest energy bills.
						</li>
					</ul>
					<h2>Calculated Energy Consumption vs. Measured Energy Consumption</h2>
					<p>
						Building Energy Rating (BER) allows for an objective comparison of
						different dwellings&apos; energy performance, focusing on asset
						(calculated) energy rating rather than operational (measured
						consumption) rating.
					</p>
					<h3>Calculated Energy Consumption</h3>
					<p>Key features include:</p>
					<ul>
						<li>
							Energy usage calculated based on the dwelling, not the number of
							occupants
						</li>
						<li>
							Consistent assumptions made for all dwellings (e.g., lighting
							level, occupants, hot water demand, heating season, and
							temperatures)
						</li>
						<li>
							Suitable for evaluating buildings for regulatory purposes and
							ideal for properties being sold or rented
						</li>
					</ul>
					<p>However, there are some drawbacks:</p>
					<ul>
						<li>
							Energy bills may differ from the asset rating depending on the
							occupant&apos;s energy usage habits
						</li>
						<li>
							Requires a detailed survey of the dwelling&apos;s fabric and
							heating system
						</li>
					</ul>
					<h3>Measured Energy Consumption</h3>
					<p>Key features include:</p>
					<ul>
						<li>
							Actual energy usage measured based on bills or monitored data
						</li>
						<li>
							No need to identify building components, and standardised
							assumptions are not relevant
						</li>
					</ul>
					<p>Advantages include:</p>
					<ul>
						<li>
							Reflects actual energy usage and does not require a detailed
							survey of dwelling fabric and heating system
						</li>
					</ul>
					<p>Disadvantages include:</p>
					<ul>
						<li>
							Difficulty comparing properties on a like-for-like basis for
							prospective buyers or tenants
						</li>
						<li>
							Highly dependent on occupants&apos; behaviour and not suitable for
							demonstrating compliance with regulatory requirements
						</li>
					</ul>
					<h2>Calculating a BER</h2>
					<p>
						A BER is determined by the amount of energy a home requires for
						space and hot water heating, ventilation, and lighting. The
						calculation utilises the Dwelling Energy Assessment Procedure
						(DEAP), Ireland&apos;s official method for calculating a
						dwelling&apos;s BER. The DEAP calculation framework is based on{' '}
						<Link
							href='https://www.iso.org/standard/41974.html#:~:text=ISO%2013790%3A2008%20gives%20calculation,to%20as%20%E2%80%9Cthe%20building%E2%80%9D.'
							className='link-2'
							target='_blank'
						>
							ISO EN 13790
						</Link>{' '}
						and heavily relies on the calculation and data used for the energy
						rating of dwellings in the UK.
					</p>
					<p>
						The BER energy rating focuses on the building itself, its fabric,
						and installed systems, rather than the energy consumption of the
						occupants. This allows prospective buyers or tenants to objectively
						compare the energy performance of different dwellings on a
						like-for-like basis.
					</p>
					<h2>Factors Affecting a BER</h2>
					<p>
						The rating a property receives can be affected by various factors,
						including:
					</p>
					<ul>
						<li>Age of construction</li>
						<li>Floor area</li>
						<li>Default values</li>
						<li>Thermal insulation</li>
						<li>Windows and doors</li>
						<li>Heating systems and controls</li>
						<li>Light fittings</li>
						<li>Renewables</li>
					</ul>
					<h2>The BER Assessment Process</h2>
					<p>
						A BER assessor collects all necessary information during an
						assessment of your home. They survey each room in the house,
						including the attic and garage (if applicable), and record the data
						in a survey form. Following the survey, your BER assessor completes
						various calculations and inputs the information gathered into the{' '}
						<Link
							className='link-2'
							target='_blank'
							href='https://www.seai.ie/home-energy/building-energy-rating-ber/support-for-ber-assessors/software/deap/'
						>
							DEAP software
						</Link>
						, which calculates the annual energy usage for heating, lighting,
						and ventilating the property.
					</p>
					<h2>Preparing for Your BER Assessment</h2>
					<p>
						To ensure a smooth and accurate BER assessment, it&apos;s essential
						to discuss with your assessor in advance and provide all required
						information and documentation. This includes details about the age
						of the dwelling, any extensions or retrofit works, and supporting
						documentation for any upgrade works or renewable systems installed
						in the home.
					</p>
					<h2>About BER (Building Energy Rating)</h2>
					<p>
						The Building Energy Rating (BER) allows prospective buyers or
						tenants to objectively compare the energy performance of different
						dwellings on a like-for-like basis. It helps you to understand the
						energy efficiency of a home and can be used as an indicator of the
						running costs and carbon emissions associated with heating the home
						to a comfortable level.
					</p>
					<h2>Optimising Your Building Energy Rating</h2>
					<p>
						Improving your property&apos;s Building Energy Rating (BER) can lead
						to a more comfortable living environment, reduced energy bills, and
						increased property value. Here are some key aspects to consider when
						aiming to enhance your property&apos;s energy efficiency:
					</p>
					<ol>
						<li>
							<strong>Insulation:</strong> Properly insulating your home&apos;s
							walls, roof, and floor can significantly reduce heat loss and
							enhance energy efficiency. Insulation materials and techniques
							have improved over the years, so upgrading your home&apos;s
							insulation can make a notable difference in your BER.
						</li>
						<li>
							<strong>Windows and Doors:</strong> Upgrading to double or
							triple-glazed windows and sealing doors can prevent up to 10% of
							your home&apos;s heat loss. Choose windows and doors with low
							U-values and solar transmittance values to improve energy
							efficiency.
						</li>
						<li>
							<strong>Heating Systems and Controls:</strong> Replacing older,
							inefficient boilers with modern condensing boilers or heat pumps
							can increase energy efficiency. Adding heating controls, such as
							programmable thermostats and zoning controls, can further optimise
							energy usage.
						</li>
						<li>
							<strong>Lighting:</strong> Utilising energy-efficient light bulbs
							in fixed lighting fixtures can lower your calculated energy usage
							and improve your BER. LED bulbs are a popular choice due to their
							efficiency and long lifespan.
						</li>
						<li>
							<strong>Renewable Energy Systems:</strong> Installing renewable
							energy systems, such as photovoltaics (PV), solar water heating,
							heat pumps, biomass, or wind energy, can significantly improve
							your BER. Ensure you provide your BER assessor with relevant
							documentation and certification for any installed renewable
							systems.
						</li>
						<li>
							<strong>Regular Maintenance:</strong> Regularly maintaining your
							heating system, insulation, and other energy-related aspects of
							your home can help maintain or improve your BER over time.
						</li>
					</ol>
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
							Assistance in understanding your BER and identifying potential
							areas for improvement
						</li>
						<li>
							Recommendations on how to enhance your property&apos;s energy
							efficiency and increase your BER
						</li>
					</ul>
					<p>
						With BERpro, you can trust that you&apos;re working with a
						reputable, knowledgeable team that prioritises your satisfaction and
						the accuracy of your Building Energy Rating.{' '}
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
		</div>
	);
}
