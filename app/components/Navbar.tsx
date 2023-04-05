import Link from "next/link";
import React from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

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
    name: "Contact",
    link: "/contact",
    icon: <FaEnvelope />,
  },
];

export default function Navbar() {
  return (
    <div className="bg-[var(--body-color)] bg-opacity-90">
      <div className='cont flex justify-between py-2'>
        <Link href='/' className='h3 font-black uppercase flex items-center'>
          <FaHome />
          BER<span className='lowercase italic font-light'>pro</span>
        </Link>
        <ul className="flex items-center p3">
            {navlinks.map((link) => {
                return (
                    <li key={link.name} className="ml-4">
                        <Link href={`/${link.link}`} className="flex px-4 py-3 items-center gap-1 rounded hover:bg-[var(--body-color-hover)]">{link.icon}{link.name}</Link>
                    </li>
                )
            })}
        </ul>
      </div>
    </div>
  );
}
