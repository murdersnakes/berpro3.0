import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhone, FaPhoneAlt } from "react-icons/fa";
import contact from "../../data/contactData";
import image from "../../public/phone.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BERpro | Building Energy Rating Assessments and Certificates",
  description:
    "Get in touch with the BERpro team for professional Building Energy Rating assessments and certificates. Contact us with your queries or to schedule an appointment, and our experts will guide you through the process to make your home energy-efficient.",
};

export default function page() {
  return (
    <div className='relative text-[var(--body-color)] bg-[var(--text-color)]'>
      <div className='cont py-10 lg:py-36'>
        <div className='grid gap-5 row-gap-8 lg:grid-cols-2'>
          <div className='flex flex-col justify-center'>
            <div className='max-w-xl mb-6'>
              <h2 className='max-w-lg mb-6 h1'>
                We would love to hear from you
              </h2>
              <p className='p1'>
                Whether you have a question about our services, would like to
                request a quote, or simply want to say hello, we are here to
                help. Our friendly and knowledgeable team is dedicated to
                providing you with the support and assistance you need.
              </p>
              <p className='p1 mt-5'>
                Thank you for considering our services, and we look forward to
                hearing from you soon!
              </p>
            </div>
            <div className='grid gap-5 row-gap-8 sm:grid-cols-2 h4'>
              <Link
                href={`tel:${contact.phone}`}
                className='flex items-center gap-2 hover:bg-indigo-700 hover:text-white transition-all duration-300 bg-neutral-100 py-2 px-4 shadow rounded'
              >
                <FaPhone />
                {contact.phone}
              </Link>
              <Link
                href={`mailto:${contact.phone}`}
                className='flex items-center gap-2 hover:bg-indigo-700 hover:text-white transition-all duration-300 bg-neutral-100 py-2 px-4 shadow rounded'
              >
                <FaEnvelope />
                {contact.email}
              </Link>
            </div>
          </div>
          <div>
            <Image
              className='hidden md:block object-cover w-full h-56 rounded sm:h-96'
              src={image}
              alt='Old Rotary Phone Black and White'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
