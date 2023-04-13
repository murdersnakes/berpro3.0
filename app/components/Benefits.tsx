import React from "react";
import { FaBolt, FaCheck, FaFile, FaMoneyBill } from "react-icons/fa";

export default function Benefits() {
  return (
    <div className='bg-gray-300 text-[var(--body-color)]'>
      <div className='cont pb-24'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-800 uppercase rounded-full bg-teal-accent-400'>
              Why Choose Us?
            </p>
          </div>
          <h4 className='max-w-lg mb-6 h2 md:mx-auto'>
            Benefits of Choosing BERpro for Your Energy Assessments
          </h4>
          <p className='text-base text-gray-700 md:text-lg'>
            BERpro offers fast, easy, accurate, and budget-friendly assessments
            for a Building Energy Rating (BER) certificate, enabling you to sell
            or rent your home and access SEAI grants for retrofitting.
          </p>
        </div>
        <div className='grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2'>
          <div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
            <div className='mr-4'>
              <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-700 text-[var(--text-color)]'>
                <FaBolt />
              </div>
            </div>
            <div>
              <h5 className='mb-3 h3 font-bold leading-5'>Fast and Easy</h5>
              <p className='mb-3 p3'>
                At BERpro, we value your time. Our certified energy assessors
                use the latest technology to quickly and accurately assess your
                property&apos;s energy efficiency. We work around your schedule
                for a convenient assessment experience.
              </p>
            </div>
          </div>
          <div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
            <div className='mr-4'>
              <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-700 text-[var(--text-color)]'>
                <FaCheck />
              </div>
            </div>
            <div>
              <h5 className='mb-3 h3 font-bold leading-5'>
                Accurate and Reliable
              </h5>
              <p className='mb-3 p3'>
                Our certified energy assessors take pride in delivering accurate
                and reliable energy assessments to our clients. We use
                state-of-the-art equipment and software and are highly trained
                to ensure that our assessments meet the highest standards.
              </p>
            </div>
          </div>
          <div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
            <div className='mr-4'>
              <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-700 text-[var(--text-color)]'>
                <FaMoneyBill />
              </div>
            </div>
            <div>
              <h5 className='mb-3 h3 font-bold leading-5'>Low-Cost</h5>
              <p className='mb-3 p3'>
                We believe in affordable energy assessments for everyone. Our
                low-cost assessments do not compromise on quality or accuracy.
                We provide transparent pricing and always provide a detailed
                quote before starting any work.
              </p>
            </div>
          </div>
          <div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
            <div className='mr-4'>
              <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-700 text-[var(--text-color)]'>
                <FaFile />
              </div>
            </div>
            <div>
              <h5 className='mb-3 h3 font-bold leading-5'>
                Comprehensive Reports
              </h5>
              <p className='mb-3 p3'>
                Our comprehensive reports provide a detailed analysis of your
                property&apos;s energy performance, including recommendations
                for improving energy efficiency and estimated cost savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
