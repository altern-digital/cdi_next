"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";
import { easeOutExpo } from "easing-utils";

export function ContactSection() {
  return (
    <section
      className="w-full min-h-fit bg-cover bg-center py-20 relative"
      style={{
        backgroundImage: "url('/contact.jpg')", //
      }}
    >
      {/* Background overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <motion.div
        className="container mx-auto px-4 flex justify items-center relative z-10"
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.25 }}
      >
        <div className="bg-[#2a2a2a]/75 text-white p-8 md:p-10 shadow-lg max-w-md w-full">
          <p className="text-sm uppercase text-blue-300 mb-2 font-semibold">
            Get Free Quote
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Let's work together.
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-full bg-[#3a3a3a] text-sm px-4 py-2 outline-none text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-[#3a3a3a] text-sm px-4 py-2 outline-none text-white placeholder-gray-400"
            />
            <input
              type="tel"
              placeholder="Phone *"
              className="w-full bg-[#3a3a3a] text-sm px-4 py-2 outline-none text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Subject *"
              className="w-full bg-[#3a3a3a] text-sm px-4 py-2 outline-none text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Hello, I am interested in..."
              rows={4}
              className="w-full bg-[#3a3a3a] text-sm px-4 py-2 outline-none text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white overflow-hidden transition-all duration-300 group w-full"
            >
              <span className="relative z-10 text-center w-full">Submit</span>
              <span className="absolute inset-0 z-0 before:absolute before:inset-0 before:scale-x-0 before:origin-left before:bg-gradient-to-r before:from-cyan-500 before:to-blue-300 before:transition-transform before:duration-500 group-hover:before:scale-x-100 before:z-0 before:content-['']"></span>
            </button>
          </form>
          <div className="w-full flex justify-center items-center pt-8">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-gray-300 hover:text-pink-400 transition-colors duration-200 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-gray-300 hover:text-blue-600 transition-colors duration-200 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
