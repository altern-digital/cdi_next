"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Lighting Applications Services",
    img: "/lighting_application.jpg",
  },
  {
    title: "Lighting Control System Services",
    img: "/lighting_control.jpg",
  },
  {
    title: "Upgrade LED & Retrofit Project",
    img: "/upgrade_LED.jpg",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#1e1e1e] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase text-blue-300 tracking-wider mb-2">
          Services
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold mb-2">
          We provide complete project lighting solutions.
        </h2>
        <div className="w-64 h-[2px] bg-blue-300 mx-auto my-12" />
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-[#2a2a2a] border border-transparent rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image */}
            <div className="relative w-full h-[500px]">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover px-2 transition duration-300 group-hover:scale-105 hover:opacity-50"
              />
            </div>

            {/* Text Area */}
            <div
              className={`relative text-center p-4 text-sm font-medium z-10 ${
                hoveredIndex === index
                  ? "bg-gradient-to-r from-cyan-500 to-blue-300"
                  : "bg-[#2a2a2a]"
              }`}
            >
              <p className="uppercase text-white/70 text-xs mb-1">Service</p>
              <h3 className="font-semibold text-white">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
