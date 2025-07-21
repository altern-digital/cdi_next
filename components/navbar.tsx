"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo kiri */}
        <Link href="/" className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <div className="text-sm leading-tight uppercase">
              <p>PT. CAHAYA</p>
              <p>DESAIN</p>
              <p>INDONESIA</p>
            </div>
            <img src="/logo.png" alt="CDI Logo" className="h-8 w-auto" />
          </div>
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold relative">
          <li>
            <Link
              href="/"
              className="inline-block border-b-[3px] border-transparent hover:border-blue-500 transition"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="inline-block border-b-[3px] border-transparent hover:border-blue-500 transition"
            >
              ABOUT US
            </Link>
          </li>
          {/* Dropdown on hover */}
          <li className="relative group">
            <button className="border-b-[3px] border-transparent hover:border-blue-500 flex items-center gap-2 transition">
              SERVICES <span className="text-xs">▼</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 z-50">
              <ul className="text-sm py-2">
                <li>
                  <Link
                    href="/services"
                    className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    Lighting Applications Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    Lighting Control System Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    Upgrade LED & Retrofit Project
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              href="/projects"
              className="inline-block border-b-[3px] border-transparent hover:border-blue-500 transition"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              href="/partners"
              className="inline-block border-b-[3px] border-transparent hover:border-blue-500 transition"
            >
              PARTNERS
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="inline-block border-b-[3px] border-transparent hover:border-blue-500 transition"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-semibold">
          <Link
            href="/"
            className="block hover:border-b-[3px] border-transparent hover:border-blue-500 pb-1"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="block hover:border-b-[3px] border-transparent hover:border-blue-500 pb-1"
          >
            ABOUT US
          </Link>
          <div className="space-y-1">
            <p className="font-semibold">SERVICES</p>
            <div className="pl-4 space-y-1 text-sm">
              <Link href="/services" className="block hover:text-blue-500">
                Lighting Applications Services
              </Link>
              <Link href="/services" className="block hover:text-blue-500">
                Lighting Control System Services
              </Link>
              <Link href="/services" className="block hover:text-blue-500">
                Upgrade LED & Retrofit Project
              </Link>
            </div>
          </div>
          <Link
            href="/projects"
            className="block hover:border-b-[3px] border-transparent hover:border-blue-500 pb-1"
          >
            PROJECTS
          </Link>
          <Link
            href="/partners"
            className="block hover:border-b-[3px] border-transparent hover:border-blue-500 pb-1"
          >
            PARTNERS
          </Link>
          <Link
            href="/contact-us"
            className="block hover:border-b-[3px] border-transparent hover:border-blue-500 pb-1"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
}
