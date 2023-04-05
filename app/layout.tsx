import React from "react";
import "../styles/globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Open_Sans} from 'next/font/google'

const myFont = Open_Sans({
    subsets: ['latin'],
    variable: "--font-sans",
    display: "optional",
})

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={myFont.variable}>
      <body className="body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
