"use client";

import Image from "next/image";

export default function Gallery() {
  // Replace titles with your actual event names
  const images = [
    { src: "/gallery1.jpg", title: "kerod" },
    { src: "/gallery2.jpg", title: "kerod" },
    { src: "/gallery3.jpg", title: "kerod" },
    { src: "/gallery4.jpg", title: "kerod" },
    { src: "/gallery5.jpg", title: "kerod" },
    { src: "/galarey8.jpg", title: "kerod 2024 wolkite" },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Portfolio & Gallery
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-md group cursor-pointer"
            >
              {/* IMAGE */}
              <Image
                src={img.src}
                alt={img.title}
                fill
                style={{ objectFit: "cover" }}
              />

              {/* BLACK OVERLAY */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* CAPTION */}
              <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xl font-semibold px-4">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
