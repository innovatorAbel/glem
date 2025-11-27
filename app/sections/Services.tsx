"use client";

export default function Services() {
  const services = [
    {
      title: "Event Planning",
      description:
        "Full end-to-end planning for weddings, corporate events, and celebrations.",
    },
    {
      title: "Venue Decoration",
      description:
        "Minimal, elegant, and modern decoration designed to match the event theme.",
    },
    {
      title: "Equipment & Lighting",
      description:
        "Professional lighting, sound systems, stages, and event production tools.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border rounded-2xl shadow-sm bg-gray-50 hover:bg-gray-100 transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
