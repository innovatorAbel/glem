import React from "react";
import Image from "next/image";
import heroImage from "../../public/hero.jpg"; // add your image in public folder

const Hero = () => {
  return (
    <section className="relative h-screen py-24 bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Event Hero"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Turning Moments into Memories
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
          Creating unforgettable events with passion and precision.
        </p>

        <div className="flex gap-4">
          <a
            href="#gallery"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            See Our Work
          </a>
          <a
            href="https://wa.me/2519XXXXXXXX?text=Hello%20Gleamstone!%20I%20want%20to%20book%20an%20event.%20"
            target="_blank"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-md hover:shadow-lg"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
