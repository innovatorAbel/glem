"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted! (Demo, not actually sending)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white shadow-lg p-8 rounded-2xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-navy-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-navy-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-navy-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold resize-none transition"
              rows={6}
              required
            />
            <button
              type="submit"
              className="
    bg-gold text-black font-bold py-3 px-6 rounded-xl
    hover:scale-105 hover:bg-yellow-400
    active:scale-95 transition-all duration-300
    border-2 border-navy rounded-xl px-6 py-3
  "
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8 text-black">
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-navy">Phone</h3>
              <p>+447432779319</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-navy">Email</h3>
              <p>contact@eventora.com</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-navy">Adress</h3>
              <p>Roy smith house 71 hillside LONDON NW10 8LN</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-navy">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gold transition">
                  Facebook
                </a>
                <a href="#" className="hover:text-gold transition">
                  Instagram
                </a>
                <a href="#" className="hover:text-gold transition">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
