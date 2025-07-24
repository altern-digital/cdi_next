"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const projects = [
  "/project1.jpg",
  "/project2.jpg",
  "/project3.jpg",
  "/project4.jpg",
];

export default function ProjectsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 4;

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % projects.length);
  };

  const getVisibleProjects = () => {
    return [...projects, ...projects].slice(
      startIndex,
      startIndex + visibleImages
    );
  };

  return (
    <section className="bg-[#1e1e1e] text-white pt-16">
      <div className="text-center mb-10">
        <p className="text-sm text-blue-300 uppercase font-semibold">
          Projects
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          The projects we proudly worked on.
        </h2>
        <div className="h-1 w-20 bg-blue-300 mt-4 mx-auto"></div>
      </div>

      <div className="relative w-full">
        {/* Carousel */}
        <div className="flex overflow-hidden">
          {getVisibleProjects().map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Project ${i + 1}`}
              className="w-[25%] object-cover transition duration-500"
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
