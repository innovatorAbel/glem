import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/kerod2024.jpg"
            alt="About Gleamstone"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            About Gleamstone
          </h2>
          <p className="text-gray-700 mb-6">
            Gleamstone is a premium event organizing company dedicated to
            creating unforgettable experiences. From corporate
            events to concerts and exhibitions, we handle every detail with
            creativity, professionalism, and passion.
          </p>
          <p className="text-gray-700">
            Our mission is to turn every moment into a cherished memory. We
            combine modern design, seamless execution, and attention to detail
            to ensure your events are extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
