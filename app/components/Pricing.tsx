import React from "react";
import Image from "next/image";
import image from "../../public/arms.webp";

export default function Pricing() {
  return (
    <div className='relative text-[var(--body-color)] bg-[var(--text-color)]'>
      <Image
        src={image}
        alt='gloved hand holding an illustration of a house and BER rating scale transparent background'
        className='py-10 md:py-0 md:absolute top-10 md:w-[45%] h-full object-cover object-right-bottom'
      />
      <div className='cont py-24'>
        <div className='flex flex-col lg:flex-row'>
          <div className='mb-4 lg:mb-0 lg:w-1/2 lg:pr-5'></div>
          <div className='lg:w-1/2 space-y-8'>
            <h2 className='mb-5 h2'>How much does it cost?</h2>
            <p className='p2 leading-relaxed'>
              we offer affordable and competitive pricing for our Building
              Energy Rating assessments. Our pricing structure is based on the
              size of the property, with larger properties generally costing
              more to assess.
            </p>
            <p className='p2 leading-relaxed'>
              For example, a one-bedroom apartment will typically cost between
              €150 and €175, while a three-bedroom house could cost between €225
              and €325. However, please note that these prices are approximate
              and may vary depending on the specific needs of your property.
            </p>
            <p className='p2 leading-relaxed'>
              We believe in providing our clients with transparent and upfront
              pricing information. That&apos;s why we offer personalized quotes
              based on your individual needs and the size of your property. This
              way, you can have peace of mind knowing exactly what to expect
              when it comes to the cost of our services.
            </p>
            <p className='p2 leading-relaxed'>
              We are committed to providing high-quality, accurate assessments
              that help property owners improve their energy efficiency and
              reduce their carbon footprint. Contact us today to schedule your
              Building Energy Rating assessment and start saving energy and
              money!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
