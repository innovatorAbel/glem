"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kerod 2025",
      avatar: "/avatar1.png",
      quote:
        "Our street run was an incredible experience thanks to Gleamstone. Every detail was handled perfectly!",
    },
    {
      // name: "Kerod 2024",
      avatar: "/avatar2.jpg",
      quote:
        "Professional, creative, and reliable. Our corporate event was flawless.",
    },
    {
      name: "Kerod 2022-2024",
      avatar: "/avatar3.png",
      quote:
        "From start to finish, everything was perfect. Highly recommended!",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
