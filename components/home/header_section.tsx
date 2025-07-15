"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const slides = [
  {
    image: "/header.jpg",
    title: "Welcoming a Smart, Beautiful, and Bright City",
    description: `Make your building beautiful with our lighting solutions, with warm and dynamic lighting that can change color. 
With a technology system on the lights that can regulate dark and light conditions, 
you can control the lights according to your wishes.`,
  },
  {
    image: "/gwk.jpg",
    title: "Innovative Lighting Systems for Modern Buildings",
    description: `From architecture to ambiance, our lighting adapts to your vision. 
Control the mood of your building like never before.`,
  },
  {
    image: "/mandiri.jpg",
    title: "Efficient, Elegant, and Smart Control",
    description: `Let your lights work for you. Integrate smart technology and let your space evolve with every moment.`,
  },
  {
    image: "/pullman.jpg",
    title: "Transform Your City with Light",
    description: `Our team helps cities shine bright with intelligent lighting solutions that save energy and inspire wonder.`,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetAutoSlide();
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
  };

  const slide = slides[current];

  return (
    <section className="w-full h-screen flex flex-col md:flex-row bg-black text-white relative">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 z-10">
        {/* Prev button - hidden on small screens */}
        <button
          onClick={goToPrev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full text-white z-20"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <div className="text-sm tracking-widest text-gray-400 mb-4">
          <span className="inline-block w-10 h-[2px] bg-white mr-2 align-middle" />
          <span className="align-middle">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          {slide.title}
        </h1>

        <p className="text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
          {slide.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/services"
            className="border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
          >
            View Services →
          </Link>
          <Link
            href="/contact-us"
            className="border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
          >
            Contact us →
          </Link>
          <Link
            href="/compro.pdf"
            className="border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
          >
            Company profile →
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 relative h-[300px] md:h-auto">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover brightness-75 transition duration-1000"
        />

        {/* Next button - hidden on small screens */}
        <button
          onClick={goToNext}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full text-white z-20"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
