"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaBook,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navlinks = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "About",
    link: "/about",
    icon: <FaUser />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <FaBriefcase />,
  },
  {
    name: "Bookings",
    link: "/bookings",
    icon: <FaBook />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <FaEnvelope />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative bg-[var(--body-color)] bg-opacity-90'>
      <button
        onClick={(e) => setIsOpen(!isOpen)}
        className={
          isOpen ? "absolute min-h-screen w-full top-0 right-0 z-40" : "hidden"
        }
      ></button>
      <div className='cont flex justify-between py-2'>
        <Link href='/' className='h3 font-black uppercase flex items-center'>
          <FaHome />
          BER<span className='lowercase italic font-light'>pro</span>
        </Link>
        <button
          onClick={handleMenu}
          className='flex p-3 md:hidden justify-center items-center rounded bg-[var(--body-color-hover)]'
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={
            isOpen
              ? "absolute top-full w-1/2 right-0 z-50 bg-[var(--body-color)] flex flex-col gap-y-6 py-6 rounded-bl-lg shadow-2xl items-center p1"
              : "hidden md:flex md:items-center p3"
          }
        >
          {navlinks.map((link) => {
            return (
              <li key={link.name} className='ml-4'>
                <Link
                  href={link.link}
                  className='flex px-4 py-3 items-center gap-1 rounded hover:bg-[var(--body-color-hover)]'
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
