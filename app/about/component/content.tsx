"use client";

import { ServicesSection } from "@/components/home/ServicesSection";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Content() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Card hover animation variants
  const cardVariants = {
    initial: { scale: 1, boxShadow: "0 0 #0000" },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 32px 0 rgba(0, 180, 255, 0.15)",
      backgroundColor: "rgba(30, 64, 175, 0.15)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  } as any;

  // Image hover animation variants
  const imageVariants = {
    initial: { scale: 1, filter: "brightness(1) blur(0px)" },
    hover: {
      scale: 1.05,
      filter: "brightness(1.15) blur(1px)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  } as any;

  return (
    <section className="bg-[#222222] text-white flex flex-col items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-16">
          {/* Left Column: Main Title and Text Content */}
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl font-bold leading-tight">
              The Story <br /> Of Our Light
            </h2>
            {/* Blue Divider */}
            <div className="w-64 h-[2px] bg-blue-300 mt-4 mb-8"></div>

            <div className="space-y-6 text-md text-gray-300 mb-10 max-w-lg">
              <p>
                The Story began in 2004, when we are just a passionate team of
                lighting "provider". We strive to learn every aspect of light
                with passion. Ten years later, Cahaya Desain Indonesia was
                established in 2015 with its sole purpose to deliver best value
                by adding professionalism to passion.
              </p>
              <p>
                The Vision Of Our Light PROVIDE SOCIETY WITH LIGHTS Strive to be
                the leading company in Architectural Lighting product and
                provide the best choice of lighting product throughout
                Indonesia.
              </p>
            </div>

            <Link
              href="/compro.pdf"
              className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-gradient-to-r from-cyan-500 to-blue-300 hover:text-white transition-all duration-300 self-start"
            >
              Company Profile
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>

          {/* Right Column: Grid of Cards */}
          <ul className="flex flex-col gap-6">
            {[
              {
                title: "Creating Customer Oriented “Relationship”",
                description:
                  "Building trust and loyalty is key to successful, long-term partnerships with our clients.",
                img: "/placeholder-stripes.jpg",
                alt: "Colorful vertical light stripes",
              },
              {
                title: "Provide the best Product & Service”",
                description:
                  "We make sure the best product for every customer design, the best products for every customer expectation.",
                img: "/placeholder-product.jpg",
                alt: "Modern lighting product",
              },
              {
                title: "Creative, Innovation & Intuitive",
                description:
                  "Consulting the best choice of product in Creative, Innovative & Intuitive ways possible.",
                img: "/placeholder-creative.jpg",
                alt: "Creative lighting team",
              },
            ].map((item) => (
              <motion.li
                className="flex flex-col md:flex-row items-stretch rounded overflow-hidden transition-shadow group-hover:shadow-lg"
                // hover left
                whileHover={{
                  x: 10,
                }}
                animate={{
                  x: 0,
                }}
              >
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <h3 className="text-xl md:text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <div className="w-full h-[2px] bg-blue-300 mb-2"></div>
                  <p className="text-sm text-gray-100">{item.description}</p>
                </div>
                <div className="relative w-full md:w-1/3 min-h-[180px] md:min-h-[160px] aspect-w-16 aspect-h-9 md:aspect-auto">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <ServicesSection />
    </section>
  );
}
