"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

// From: components/home/services_section.tsx
const services = [
  {
    title: "Lighting Applications Services",
    img: "/lighting_application.jpg",
    href: "/services/lighting_application",
  },
  {
    title: "Lighting Control System Services",
    img: "/lighting_control.jpg",
    href: "/services/lighting_control",
  },
  {
    title: "Upgrade LED & Retrofit Project",
    img: "/upgrade_LED.jpg",
    href: "/services/upgrade_led",
  },
];

export default function ServicesContent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  return (
    <section className="bg-[#222222] text-white py-16 md:py-24">
      <div className="px-6 ">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 container mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We provide complete project <br /> lighting solutions.
            </h2>
            <div className="w-64 h-[2px] bg-blue-300 mt-2" />
          </div>
          <div className="text-gray-300 text-base leading-relaxed">
            <p>
              Start from concept to delivery and live commissioning, our
              expertise in lighting, control system, project management and
              installation always ensure every project has been taken precisely
              with details attention. Your successful lighting is our driven
              goals.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 container mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#2a2a2a] border border-transparent overflow-hidden shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => router.push(service.href)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  router.push(service.href);
                }
              }}
            >
              {/* Image */}
              <div className="relative w-full h-[50vh]">
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
      </div>
    </section>
  );
}
