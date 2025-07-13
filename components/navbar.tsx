"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Optional: Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#222222] text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo kiri */}
        <Link href="/" className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <div className="text-sm leading-tight uppercase">
              <p className="text-white">PT. CAHAYA</p>
              <p className="text-white">DESAIN</p>
              <p className="text-white">INDONESIA</p>
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

        {/* Menu for desktop */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold">
          <li>
            <Link href="/" className="hover:text-yellow-500">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-500">
              ABOUT US
            </Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 hover:text-yellow-500"
            >
              SERVICES <span className="text-xs">▼</span>
            </button>
            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute top-full mt-2 w-64 bg-[#5c4525] text-white shadow-lg z-50">
                <ul className="text-sm py-2">
                  <li>
                    <Link
                      href="/services"
                      className="block px-4 py-2 hover:bg-yellow-600 hover:text-white transition"
                    >
                      Lighting Applications Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="block px-4 py-2 hover:bg-yellow-600 hover:text-white transition"
                    >
                      Lighting Control System Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="block px-4 py-2 hover:bg-yellow-600 hover:text-white transition"
                    >
                      Upgrade LED & Retrofit Project
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link href="/projects" className="hover:text-yellow-500">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="partners" className="hover:text-yellow-500">
              PARTNERS
            </Link>
          </li>
          <li>
            <Link href="contact-us" className="hover:text-yellow-500">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-semibold">
          <Link href="/" className="block hover:text-yellow-500">
            HOME
          </Link>
          <Link href="/about" className="block hover:text-yellow-500">
            ABOUT US
          </Link>
          <div className="space-y-1">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 hover:text-yellow-500"
            >
              SERVICES <span className="text-xs">▼</span>
            </button>
            {showDropdown && (
              <div className="pl-4 space-y-1 text-sm">
                <Link href="/services" className="block hover:text-yellow-500">
                  Lighting Applications Services
                </Link>
                <Link href="/services" className="block hover:text-yellow-500">
                  Lighting Control System Services
                </Link>
                <Link href="/services" className="block hover:text-yellow-500">
                  Upgrade LED & Retrofit Project
                </Link>
              </div>
            )}
          </div>
          <Link href="/projects" className="block hover:text-yellow-500">
            PROJECTS
          </Link>
          <Link href="/partners" className="block hover:text-yellow-500">
            PARTNERS
          </Link>
          <Link href="/contact-us" className="block hover:text-yellow-500">
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
}
