import React from "react";
import "../styles/globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Archivo, Open_Sans } from "next/font/google";

const headFont = Archivo({
  subsets: ["latin"],
  variable: "--font-head",
  display: "swap",
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${headFont.variable} ${bodyFont.variable}`}>
      <body className='body'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
