"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.jpg"; // your logo in public folder
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Services", "Gallery", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#001F54] text-gold fixed w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Eventora Logo" width={50} height={50} />
          <span className="text-2xl font-bold text-gold">Gleamstone</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/+447432779319?text=Hello%20Gleamstone!%20I%20want%20to%20book%20an%20event.%20"
            target="_blank"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-md hover:shadow-lg"
          >
            Book Now on WhatsApp
          </a>
        </div>

        {/* Hamburger Button Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Slide + Blur + Shadow + Hover Effects */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 backdrop-blur-sm ${
          isOpen ? "max-h-screen opacity-100 shadow-xl" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-[#001F54]/90">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                href={`#${link.toLowerCase()}`}
                className="hover:text-yellow-400 text-lg font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="bg-gold text-[#001F54] font-semibold px-5 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
