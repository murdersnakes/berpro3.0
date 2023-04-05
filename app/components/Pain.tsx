import Image from "next/image";
import React from "react";
import image1 from "../../public/struggling.svg";
import image2 from "../../public/expensive.svg";
import image3 from "../../public/solution.svg";
import image4 from "../../public/action.svg";

export default function Pain() {
  return (
    <div>
      <div className=''>
        <div className="pt-24 pb-12 bg-[var(--body-color)]">
            <div className=' cont  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center '>
              <Image src={image1} alt='' className='w-full p-[22%]' />
              <div className="text-center lg:text-left ">
                <h2 className='text-3xl'>
                  Are you struggling with high energy costs and want to save money
                  on your bills?
                </h2>
                <p className='text-md mt-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                  accusantium itaque doloremque ipsam iusto iste quaerat deleniti
                  corporis veritatis dolores, architecto consequatur.
                </p>
              </div>
            </div>
        </div>

        <div className="py-12 bg-[var(--body-color-hover)]">
            <div className='cont grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='text-center lg:text-left row-start-2 lg:row-start-1'>
                <h2 className='text-3xl'>
                  Increasing energy bills becoming more
                  and more difficult to keep up with?
                </h2>
                <p className='text-md mt-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                  accusantium itaque doloremque ipsam iusto iste quaerat deleniti
                  corporis veritatis dolores, architecto consequatur.
                </p>
              </div>
              <Image src={image2} alt='' className='w-full p-[22%]' />
            </div>
        </div>

        <div className="py-12 bg-[var(--body-color)]">
            <div className='cont grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <Image src={image3} alt='' className='w-full p-[22%]' />
              <div className="text-center lg:text-left ">
                <h2 className='text-3xl'>
                  That&apos;s where we come in! We offer professional
                  BER assessments to help you identify savings on
                  energy costs.
                </h2>
                <p className='text-md mt-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                  accusantium itaque doloremque ipsam iusto iste quaerat deleniti
                  corporis veritatis dolores, architecto consequatur.
                </p>
              </div>
            </div>
        </div>

        <div className="pt-12 pb-24 bg-[var(--body-color-hover)]">
            <div className='cont grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='text-center lg:text-left row-start-2 lg:row-start-1'>
                <h2 className='text-3xl'>
                  Book your BER assessment with us today and start saving money on
                  your energy bills.
                </h2>
                <p className='text-md mt-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                  accusantium itaque doloremque ipsam iusto iste quaerat deleniti
                  corporis veritatis dolores, architecto consequatur.
                </p>
              </div>
              <Image src={image4} alt='' className='w-full p-[22%]' />
            </div>
        </div>

      </div>
    </div>
  );
}
