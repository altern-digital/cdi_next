"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-black text-white">
      <div className="w-full min-h-screen flex flex-col md:flex-row bg-black text-white container mx-auto">
        {/* Left side content */}
        <div className="md:w-1/2 flex flex-col justify-center px-6  md:px-16 py-12">
          <div className="text-sm tracking-widest text-gray-400 mb-4 px-6">
            <span className="inline-block w-10 h-[2px] bg-white mr-2 align-middle" />
            <span className="align-middle">01 / 04</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug px-6">
            Welcoming a Smart, Beautiful, <br /> and Bright City
          </h1>
          <p className="text-gray-300 mb-8 leading-relaxed px-6">
            Make your building beautiful with our lighting solutions, with warm
            and dynamic lighting that can change color.
            <br />
            With a technology system on the lights that can regulate dark and
            light conditions, You can control the lights according to your
            wishes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 px-6">
            <Link
              href="#"
              className="border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
            >
              View Services →
            </Link>
            <Link
              href="#"
              className="border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
            >
              Contact us →
            </Link>
          </div>
        </div>

        {/* Right side image */}
        <div className="md:w-1/2 relative h-[300px] md:h-auto">
          <Image
            src="/header.jpg" // update this to your image path
            alt="Smart City"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
        </div>
      </div>
    </section>
  );
}
