"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaSpinner, FaCheck, FaTimes } from "react-icons/fa";
import seai from "../../public/seai_logo.svg"

import Confetti from "react-confetti";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [numberOfPieces, setNumberOfPieces] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    setIsLoading(true);
    setIsSuccess(null);

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (response.ok) {
      setIsLoading(false);
      setIsSuccess(true);
      setSuccessMessage("Email sent 🚀 - We will be in touch asap.");
      setNumberOfPieces(200);
      setTimeout(() => {
        setNumberOfPieces(0);
      }, 3000);
    } else {
      setIsLoading(false);
      setIsSuccess(false);
      setSuccessMessage("Error sending message ❌ - Please try again later.");
    }
  };

  const renderButtonIcon = () => {
    if (isLoading) {
      return <FaSpinner className='animate-spin' />;
    } else if (isSuccess === true) {
      return <FaCheck />;
    } else if (isSuccess === false) {
      return <FaTimes />;
    }
  };

  const renderConfetti = () => {
    if (isSuccess === true) {
      return (
        <Confetti
          colors={[
            "#6ee7b7",
            "#34d399",
            "#059669",
            "#065f46",
            "#a5b4fc",
            "#6366f1",
            "#4338ca",
          ]}
          height={800}
          numberOfPieces={numberOfPieces}
          gravity={0.1}
          initialVelocityY={20}
        />
      );
    }
  };

  return (
    <div className='-z-50'>
      {renderConfetti()}
      <div className='relative bg-dark text-light'>
        <div className='absolute inset-x-0 bottom-0'>
          <svg
            viewBox='0 0 224 12'
            fill='currentColor'
            className='w-full -mb-1 text-light -z-40'
            preserveAspectRatio='none'
          >
            <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z' />
          </svg>
        </div>
        <div className='cont py-12 sm:py-24 md:py-36'>
          <div className='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center flex flex-col items-start sm:items-center justify-center'>
            <Image src={seai} alt="seai logo" className="w-36 object-contain bg-light p-3 rounded-xl" />
            <h1 className=' my-6 h1 text-white'>
              Get a <span className='text-acc1'>BER Cert</span>
              <span className='inline-block text-deep-purple-accent-400'>
                in Meath, Louth and Dublin
              </span>
            </h1>
            <p className='mb-6 text-base md:text-lg'>
              Need a Building Energy Rating (BER) certificate for selling or
              renting your home? Looking for SEAI grants to upgrade your energy
              systems? BERpro has got you covered.
            </p>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'
            >
              <input
                autoComplete='email'
                placeholder='Email'
                required
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='flex-grow w-full h-12 px-4 mb-3 text-dark transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline'
              />
              <button
                type='submit'
                className='gap-2 inline-flex whitespace-nowrap items-center justify-center w-full h-12 btn-1 md:w-auto '
              >
                Get a Quote
                {renderButtonIcon()}
              </button>
            </form>
            <div className='relative'>
              <p className='max-w-md pb-3 mb-10 text-xs tracking-wide neutral-100 sm:text-sm sm:mx-auto md:mb-16'>
                We respect your privacy and will never share your information.
                Please see our{" "}
                <Link className='link-light' href='/privacy-policy'>
                  Privacy Policy
                </Link>{" "}
                for more information.
              </p>
              {successMessage && (
                <p
                  className={`absolute w-full top-full left-1/2 -translate-x-1/2 px-4 py-2 mb-2 rounded shadow ${
                    successMessage ===
                    "Email sent 🚀 - We will be in touch asap."
                      ? "bg-acc1 text-white"
                      : "bg-acchov3 text-black"
                  }`}
                >
                  {successMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
