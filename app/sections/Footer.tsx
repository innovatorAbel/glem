"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  const links = [
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Gallery", path: "#gallery" },
    { name: "Team", path: "#team" },
    { name: "Contact", path: "#contact" },
    { name: "Terms", path: "#terms" },
  ];

  const socialLinks = [
    { Icon: FaFacebookF, url: "https://facebook.com" },
    { Icon: FaInstagram, url: "https://instagram.com" },
    { Icon: SiTiktok, url: "https://tiktok.com" },
    { Icon: FaTelegramPlane, url: "https://t.me" },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8">
        {/* Links */}
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {links.map((link) => (
            <div key={link.name} className="px-5 py-2">
              <a
                href={link.path}
                className="text-base font-medium hover:text-gold transition"
              >
                {link.name}
              </a>
            </div>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex justify-center mt-8 space-x-6 text-2xl">
          {socialLinks.map(({ Icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              className="hover:text-gold transition-transform transform hover:scale-125"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-gold/70">
          © 2025 Gleamstone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
