import Image from "next/image";
import React from "react";
import image1 from "../../public/struggling.svg";
import image2 from "../../public/worried.svg";
import image3 from "../../public/solution.svg";

export default function Pain() {
  return (
    <div>
      <div className=''>
        <div className='pt-24 pb-12 bg-[var(--text-color)] text-[var(--body-color)]'>
          <div className=' cont  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center '>
            <Image
              src={image1}
              alt='confused woman about BER illustration'
              className='w-full px-[17%] lg:px-[22%]'
            />
            <div className='text-center lg:text-left '>
              <h2 className='h2'>
                Moving house, renting or retrofitting? We can help you with your
                mandatory BER assessment.
              </h2>
              <p className='p2 mt-3 '>
                A Building Energy Rating (BER) is a mandatory requirement when a
                property is offered for sale or rent. In the event that you
                intend to sell or rent a property, a Building Energy Rating
                (BER) is an essential prerequisite. We strive to simplify the
                entire process for you, ensuring a hassle-free experience.
              </p>
            </div>
          </div>
        </div>

        <div className='pb-24 pt-12 bg-[var(--text-color)] text-[var(--body-color)]'>
          <div className='cont grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='text-center lg:text-left '>
              <h2 className='h2'>
                That&apos;s where{" "}
                <span className='uppercase font-bold text-[var(--primary-color)]'>
                  BER<span className='lowercase italic light'>pro</span>
                </span>{" "}
                comes in! We offer professional assessments to help you identify
                savings on energy costs.
              </h2>
              <p className='p2 mt-3'>
                BERpro is a leading provider of professional energy assessments
                that can help you identify ways to save on your energy costs.
                Our experts will assess your property and provide tailored
                solutions to help you reduce your energy consumption and
                expenses.
              </p>
            </div>
            <Image
              src={image3}
              alt='confident man about green energy illustration'
              className='w-full px-[17%] lg:px-[22%]'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
