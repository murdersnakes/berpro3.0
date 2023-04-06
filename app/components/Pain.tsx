import Image from "next/image";
import React from "react";
import image1 from "../../public/struggling.svg";
import image2 from "../../public/worried.svg";
import image3 from "../../public/solution.svg";

export default function Pain() {
  return (
    <div>
      <div className=''>
        <div className='pt-24 pb-12 bg-[var(--body-color)]'>
          <div className=' cont  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center '>
            <Image
              src={image1}
              alt=''
              className='w-full px-[17%] lg:px-[22%]'
            />
            <div className='text-center lg:text-left '>
              <h2 className='h2'>
                Are you struggling with high energy costs and want to save money
                on your bills?
              </h2>
              <p className='p2 mt-3 text-gray-300'>
                Using CSO data from the 2022 Survey of Income and Living
                Conditions, it shows that an estimated 377,000 people were
                unable to afford adequate heat. This compared to 160,000 people
                in 2021.
              </p>
            </div>
          </div>
        </div>

        <div className='relative py-12 '>
          <div className='bg-svg-1 absolute top-0 right-0 w-full h-full -z-10 '></div>
          <div className='cont grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='text-center lg:text-left row-start-2 lg:row-start-1'>
              <h2 className='h2'>
                Increasing energy bills becoming more and more difficult to keep
                up with?
              </h2>
              <p className='p2 mt-3 text-gray-300'>
                As a result of the energy crisis, almost 73% of Irish people say
                they have changed their everyday habits at home to try save on
                energy costs.
              </p>
            </div>
            <Image
              src={image2}
              alt=''
              className='w-full px-[17%] lg:px-[22%]'
            />
          </div>
        </div>

        <div className='pt-12 pb-24 bg-[var(--body-color)]'>
          <div className='cont grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <Image
              src={image3}
              alt=''
              className='w-full px-[17%] lg:px-[22%]'
            />
            <div className='text-center lg:text-left '>
              <h2 className='h2'>
                That&apos;s where{" "}
                <span className='uppercase font-bold text-[var(--text-color-hover)]'>
                  BER<span className='lowercase italic light'>pro</span>
                </span>{" "}
                comes in! We offer professional assessments to help you identify
                savings on energy costs.
              </h2>
              <p className='p2 text-gray-300 mt-3'>
                BERpro is a leading provider of professional energy assessments
                that can help you identify ways to save on your energy costs.
                Our experts will assess your property and provide tailored
                solutions to help you reduce your energy consumption and
                expenses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
