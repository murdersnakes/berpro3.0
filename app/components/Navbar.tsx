"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import {
  FaHome,
  FaEnvelope,
  FaBook,
  FaBars,
  FaTimes,
  FaSortAmountUpAlt,
} from "react-icons/fa";

const navlinks = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "About BER",
    link: "/about-ber",
    icon: <FaSortAmountUpAlt />,
  },
  {
    name: "Blog",
    link: "/blog",
    icon: <FaBook />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <FaEnvelope />,
  },
];

export default function Navbar() {
  const menuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative bg-[var(--body-color)] bg-opacity-90'>
      <div className='cont flex justify-between py-2'>
        <Link
          href='/'
          aria-label='Berpro, Back to homepage'
          title='Berpro, Back to homepage'
          className='h3 font-black uppercase flex items-center'
        >
          <FaHome />
          BER<span className='lowercase italic font-light'>pro</span>
        </Link>
        <button
          onClick={handleMenu}
          aria-label='Open Menu'
          title='Open Menu'
          className='flex p-3 md:hidden justify-center items-center rounded bg-[var(--body-color-hover)] bg-opacity-50'
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          ref={menuRef}
          className={`absolute top-full right-0 w-1/2 py-12 rounded-bl-lg shadow-xl md:shadow-none space-y-3 md:space-y-0 md:py-1 md:relative md:min-h-fit md:w-auto md:translate-x-0 bg-[var(--body-color)] text-[var(--text-color)] z-40 transition-all duration-500 ${
            isOpen
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-full opacity-0 scale-95"
          } md:translate-x-0 md:opacity-100 md:scale-100 md:flex`}
        >
          {navlinks.map((link) => {
            return (
              <li key={link.name} className='ml-4'>
                <Link
                  href={link.link}
                  aria-label={link.name}
                  title={link.name}
                  className='flex px-4 py-3 items-center gap-1 rounded hover:bg-[var(--body-color-hover)] '
                  onClick={() => setIsOpen(false)}
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
