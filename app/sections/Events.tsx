"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineExternalLink } from "react-icons/hi";

interface EventItem {
  id: string;
  name: string;
  type: string;
  location: string;
  year: string;
  description: string;
  image: string;
  url?: string;
  isExternal?: boolean;
}

export default function Events() {
  const events: EventItem[] = [
    {
      id: "runify-10k-2026",
      name: "RUNIFY 10K 2026",
      type: "Community Running Festival",
      location: "London",
      year: "2026",
      description:
        "London's boldest community running festival, bringing together runners, families, and communities from every background for a day of sport, culture, and unstoppable energy.",
      image: "/runify.jpg",
      url: "https://www.runify.co.uk/",
      isExternal: true,
    },
    /*
    {
      id: "kerod-2025",
      name: "Kerod Athletics 2025",
      type: "Street Run & Athletics",
      location: "Addis Ababa",
      year: "2025",
      description:
        "An inspiring annual street run celebrating fitness, youth athleticism, and community engagement with passion and excellence.",
      image: "/kerod2024.jpg",
      url: "#contact",
      isExternal: false,
    },
    {
      id: "corporate-expo-2024",
      name: "Gleamstone Corporate Expo",
      type: "Corporate & Exhibition",
      location: "London",
      year: "2024",
      description:
        "Minimalist, elegant venue decoration and full end-to-end management for premier corporate partners and cultural galas.",
      image: "/gallery1.jpg",
      url: "#contact",
      isExternal: false,
    },
    */
  ];

  return (
    <section id="events" className="py-24 bg-gray-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">
            Featured Projects
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Organized Events
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Discover the landmark events and community festivals organized by Gleamstone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const CardWrapper = ({ children }: { children: React.ReactNode }) =>
              event.url ? (
                <a
                  href={event.url}
                  target={event.isExternal ? "_blank" : "_self"}
                  rel={event.isExternal ? "noopener noreferrer" : undefined}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-gray-100"
                >
                  {children}
                </a>
              ) : (
                <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col h-full border border-gray-100">
                  {children}
                </div>
              );

            return (
              <CardWrapper key={event.id}>
                {/* Event Image */}
                <div className="relative w-full h-56 overflow-hidden bg-gray-200">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#001F54]/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                    {event.type}
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <HiOutlineLocationMarker className="text-indigo-500 w-4 h-4" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1 font-medium bg-gray-100 px-2.5 py-0.5 rounded-full">
                      <HiOutlineCalendar className="text-indigo-500 w-3.5 h-3.5" />
                      {event.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {event.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {event.description}
                  </p>

                  {/* CTA Link / Button */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-indigo-600 font-semibold text-sm group-hover:text-indigo-700">
                    <span>
                      {event.isExternal ? "Visit Dedicated Website" : "Learn More"}
                    </span>
                    {event.isExternal ? (
                      <HiOutlineExternalLink className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    ) : (
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
