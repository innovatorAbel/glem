"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  const links = ["About", "Services", "Gallery", "Team", "Contact", "Terms"];

  return (
    <section className="bg-navy text-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 sm:px-6 lg:px-8  hover:text-yellow-400 transition-colors duration-10 font-medium">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {links.map((link) => (
            <div key={link} className="px-5 py-2">
              <a
                href="#"
                className="text-base font-medium hover:text-gold transition-colors duration-300"
              >
                {link}
              </a>
            </div>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center mt-8 space-x-6 text-2xl">
          {[FaFacebookF, FaInstagram, SiTiktok, FaTelegramPlane].map(
            (Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-gold transition-transform duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Icon />
              </a>
            )
          )}
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-gold/70">
          © 2025 Gleamstone. All rights reserved.
        </p>
      </div>
    </section>
  );
}
