import React from "react";

export default function CalcVsMeasured() {
  return (
    <div className='bg-[var(--text-color)] text-[var(--body-color)]'>
      <div className='cont py-24 '>
        <div className='max-w-xl mb-10 text-center mx-auto lg:max-w-2xl md:mb-12'>
          <h3 className='max-w-lg mx-auto mb-4 h2'>
            Calculated Energy Consumption vs. Measured Energy Consumption
          </h3>
          <p className='p1'>
            Building Energy Rating (BER) allows for an objective comparison of
            different dwellings&apos; energy performance, focusing on asset
            (calculated) energy rating rather than operational (measured
            consumption) rating.
          </p>
        </div>
        <div className='flex flex-col border-2 border-black bg-gray-100 rounded-lg shadow-sm md:justify-center lg:flex-row'>
          <div className='flex flex-col justify-between border-b p-10 sm:p-16 lg:border-b-0 lg:border-r-2-black lg:w-1/2'>
            <div>
              <h4 className='max-w-md mb-6 h2'>
                Calculated Energy Consumption
              </h4>
              <p className='mt-6 mb-2 p3 font-semibold tracking-wide text-indigo-700'>
                Key features include:
              </p>
              <ul className='prose list-disc prose-li:marker:text-gray-600'>
                <li>
                  Energy usage calculated based on the dwelling, not the number
                  of occupants
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
              <p className='mt-6 mb-2 p3 font-semibold tracking-wide text-indigo-700'>
                However, there are some drawbacks:
              </p>
              <ul className='prose list-disc prose-li:marker:text-gray-600'>
                <li>
                  Energy bills may differ from the asset rating depending on the
                  occupant&apos;s energy usage habits
                </li>
                <li>
                  Requires a detailed survey of the dwelling&apos;s fabric and
                  heating system
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col justify-between p-10 sm:p-16 lg:w-1/2'>
            <div>
              <h4 className='max-w-md mb-6 h2'>Measured Energy Consumption</h4>
              <p className='mt-6 mb-2 p3 font-semibold tracking-wide text-indigo-700'>
                Key features include:
              </p>
              <ul className='prose list-disc prose-li:marker:text-gray-600'>
                <li>
                  Actual energy usage measured based on bills or monitored data
                </li>
                <li>
                  No need to identify building components, and standardised
                  assumptions are not relevant
                </li>
              </ul>
              <p className='mt-6 mb-2 p3 font-semibold tracking-wide text-indigo-700'>
                Advantages include:
              </p>
              <ul className='prose list-disc prose-li:marker:text-gray-600'>
                <li>
                  Reflects actual energy usage and does not require a detailed
                  survey of dwelling fabric and heating system
                </li>
              </ul>
              <p className='mt-6 mb-2 p3 font-semibold tracking-wide text-indigo-700'>
                Disadvantages include:
              </p>
              <ul className='prose list-disc prose-li:marker:text-gray-600'>
                <li>
                  Difficulty comparing properties on a like-for-like basis for
                  prospective buyers or tenants
                </li>
                <li>
                  Highly dependent on occupants&apos; behaviour and not suitable
                  for demonstrating compliance with regulatory requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
