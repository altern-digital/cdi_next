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

export function Content() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="bg-[#222222] text-white py-16 md:py-24 flex flex-col items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Main Title and Text Content */}
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl font-bold leading-tight">
              The Story <br /> Of Our Light
            </h2>
            {/* Blue Divider */}
            <div className="w-64 h-[2px] bg-blue-400 mt-4 mb-8"></div>

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

            <a
              href="#" // Replace with actual profile URL
              className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-gradient-to-r from-orange-500 to-purple-700 hover:text-white transition-all duration-300 self-start"
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
            </a>
          </div>

          {/* Right Column: Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Creating Customer Oriented Relationship */}
            <div className="relative p-6 flex flex-col justify-end overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto">
              <h3 className="relative z-10 text-xl md:text-xl font-bold mb-2">
                Creating Customer Oriented <br className="hidden md:block" />
                “Relationship”
              </h3>
              <div className="w-full h-[2px] bg-blue-400 mb-2"></div>
              <p className="relative z-10 text-sm text-gray-100">
                Building trust and loyalty is key to successful, long-term
                partnerships with our clients.
              </p>
            </div>
            <div className="relative overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto bg-gray-800">
              <Image
                src="/placeholder-stripes.jpg"
                alt="Colorful vertical light stripes"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>

            {/* Card 2: Provide the best Product and Services */}
            <div className="relative p-6 flex flex-col justify-end overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto">
              <h3 className="relative z-10 text-xl md:text-xl font-bold mb-2">
                Provide the best <br className="hidden md:block" />
                Product & Service”
              </h3>
              <div className="w-full h-[2px] bg-blue-400 mb-2"></div>
              <p className="relative z-10 text-sm text-gray-100">
                We make sure the best product for every customer design, the
                best products for every customer expectation.
              </p>
            </div>
            <div className="relative overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto bg-gray-800">
              <Image
                src="/placeholder-product.jpg"
                alt="Modern lighting product"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>

            {/* Card 3: Creative, Innovation & Intuitive */}
            <div className="relative p-6 flex flex-col justify-end overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto">
              <h3 className="relative z-10 text-xl md:text-xl font-bold mb-2">
                Creative, Innovation & <br className="hidden md:block" />
                Intuitive
              </h3>
              <div className="w-full h-[2px] bg-blue-400 mb-2"></div>
              <p className="relative z-10 text-sm text-gray-100">
                Consulting the best choice of product in Creative, Innovative &
                Intuitive ways possible.
              </p>
            </div>
            <div className="relative overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto bg-gray-800">
              <Image
                src="/placeholder-creative.jpg"
                alt="Creative lighting team"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-center text-lg text-white font-semibold mb-8">
          LEARN MORE ABOUT THE SERVICES WE OFFER
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#2a2a2a] border border-transparent rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative w-full h-[500px]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105 hover:opacity-50"
                />
              </div>

              {/* Text Area */}
              <div
                className={`relative text-center p-4 text-sm font-medium z-10 transition-colors duration-300 ${
                  hoveredIndex === index
                    ? "bg-gradient-to-r from-orange-500 to-purple-700"
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
