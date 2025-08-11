"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { easeOutExpo } from "easing-utils";

// Add slug for each service, matching the navbar
const services = [
  {
    title: "Lighting Applications Services",
    img: "/lighting_application.jpg",
    slug: "lighting_application",
  },
  {
    title: "Lighting Control System Services",
    img: "/lighting_control.jpg",
    slug: "lighting_control",
  },
  {
    title: "Upgrade LED & Retrofit Project",
    img: "/upgrade_LED.jpg",
    slug: "upgrade_led",
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#1e1e1e] text-white py-20 w-full">
      <motion.div
        className="px-4"
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.25 }}
      >
        <div className="text-center">
          <p className="text-sm uppercase text-blue-300 tracking-wider mb-2">
            Services
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            We provide complete project lighting solutions.
          </h2>
          <div className="w-64 h-[2px] bg-blue-300 mx-auto my-12" />
        </div>

        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 container mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group relative bg-[#2a2a2a] border border-transparent overflow-hidden shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative w-full h-[50vh]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover px-2 opacity-50 transition duration-300 group-hover:scale-105 hover:opacity-75"
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
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
