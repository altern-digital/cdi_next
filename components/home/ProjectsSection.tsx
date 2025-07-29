"use client";

import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react";
import { easeOutExpo } from "easing-utils";

const projects = [
  "/project1.jpg",
  "/project2.jpg",
  "/project3.jpg",
  "/project4.jpg",
];

export function ProjectsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 7;

  const prev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <section className="bg-[#1e1e1e] text-white py-16 overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.25 }}
      >
        <div className="text-center mb-10">
          <p className="text-sm text-blue-300 uppercase font-semibold">
            Projects
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            The projects we proudly worked on.
          </h2>
          <div className="h-1 w-20 bg-blue-300 mt-4 mx-auto"></div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (startIndex % projects.length) * (100 / visibleImages)
              }%)`,
              width: `${
                (projects.length + visibleImages) * (100 / visibleImages)
              }%`,
            }}
          >
            {[...projects, ...projects].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Project ${i + 1}`}
                className="w-[14.2857%] object-cover opacity-50 hover:opacity-75 transition duration-500"
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 z-10"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 z-10"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
