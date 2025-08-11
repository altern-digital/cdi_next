"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { easeOutExpo } from "easing-utils";

// Reusable Underline Effect Component with framer-motion
const UnderlineLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    href={href}
    className={`relative inline-block text-white hover:text-white transition-all duration-150 group ${className}`}
  >
    {children}
    <span className="absolute bottom-[-24px] left-1/2 w-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-300 transition-all duration-150 group-hover:w-full group-hover:left-0 overflow-hidden">
      <motion.span
        layoutId="underline"
        className="block h-full"
        initial={{ width: 0, left: "50%" }}
        whileHover={{ width: "100%", left: 0 }}
        transition={{ duration: 0.3, ease: easeOutExpo }}
      />
    </span>
  </Link>
);

// Reusable Underline Button Component with framer-motion
const UnderlineButton = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`relative inline-block text-white hover:text-white transition-all duration-300 group items-center gap-2 ${className}`}
  >
    {children}
    <span className="absolute bottom-[-24px] left-1/2 w-0 h-1 bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0 overflow-hidden">
      <motion.span
        layoutId="underline"
        className="block h-full bg-blue-400"
        initial={{ width: 0, left: "50%" }}
        whileHover={{ width: "100%", left: 0 }}
        transition={{ duration: 0.3, ease: easeOutExpo }}
      />
    </span>
  </button>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-[#1e1e1e] text-white sticky top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center relative">
        {/* Logo kiri */}
        <Link href="/" className="flex items-center space-x-4 group">
          <div className="flex items-center space-x-4 transition-transform duration-300 group-hover:scale-105">
            <img src="/logo.png" alt="CDI Logo" className="h-8 w-auto" />
          </div>
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <AnimatePresence initial={false} mode="wait">
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2, ease: easeOutExpo }}
                >
                  <XMarkIcon className="w-6 h-6 text-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2, ease: easeOutExpo }}
                >
                  <Bars3Icon className="w-6 h-6 text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium relative">
          <li>
            <UnderlineLink href="/">HOME</UnderlineLink>
          </li>
          <li>
            <UnderlineLink href="/about">ABOUT US</UnderlineLink>
          </li>
          {/* Dropdown on hover with improved hover area */}
          <li
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="flex items-center gap-2">
              <UnderlineLink href="/services">SERVICES</UnderlineLink>
              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                ▼
              </span>
            </div>

            {/* Invisible hover area to prevent dropdown from closing */}
            <div className="absolute top-full left-0 w-full h-4 bg-transparent" />

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, y: 32, pointerEvents: "none" }}
                  animate={{ opacity: 1, y: 8, pointerEvents: "auto" }}
                  exit={{ opacity: 0, y: 32, pointerEvents: "none" }}
                  transition={{ duration: 0.25, ease: easeOutExpo }}
                  className="absolute top-full left-0 mt-4 w-80 bg-gradient-to-r from-cyan-500 to-blue-300 text-white shadow-lg z-50 rounded-none"
                  style={{ pointerEvents: isServicesOpen ? "auto" : "none" }}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {/* Additional hover area at the top of dropdown */}
                  <div className="absolute top-[-16px] left-0 w-full h-4 bg-transparent" />

                  <ul className="text-base py-5 px-5 space-y-8 font-medium">
                    <li>
                      <Link
                        href="/services/lighting_application"
                        className="block leading-tight transition-all duration-300 hover:text-blue-200 hover:translate-x-2 group/item"
                      >
                        <span className="relative">
                          Lighting Applications
                          <br />
                          Services
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/item:w-full"></span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/lighting_control"
                        className="block leading-tight transition-all duration-300 hover:text-blue-200 hover:translate-x-2 group/item"
                      >
                        <span className="relative">
                          Lighting Control System
                          <br />
                          Services
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/item:w-full"></span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/upgrade_led"
                        className="block leading-tight transition-all duration-300 hover:text-blue-200 hover:translate-x-2 group/item"
                      >
                        <span className="relative">
                          Supply and Install
                          <br />
                          Services
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/item:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li>
            <UnderlineLink href="/projects">PROJECTS</UnderlineLink>
          </li>
          <li>
            <UnderlineLink href="/partners">PARTNERS</UnderlineLink>
          </li>
          <li>
            <UnderlineLink href="/contact-us">CONTACT US</UnderlineLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: easeOutExpo }}
            className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium bg-black/90 backdrop-blur-sm"
          >
            <Link
              href="/"
              className="block text-white hover:text-white transition-all duration-300 pb-2 border-b border-transparent hover:border-blue-400 hover:bg-white/5 rounded-lg px-3 py-2 -mx-3"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-white transition-all duration-300 pb-2 border-b border-transparent hover:border-blue-400 hover:bg-white/5 rounded-lg px-3 py-2 -mx-3"
            >
              ABOUT US
            </Link>
            <div className="space-y-1">
              <p className="font-medium text-white px-3 py-2">SERVICES</p>
              <div className="pl-4 space-y-1 text-sm">
                <Link
                  href="/services"
                  className="block text-white/80 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg px-3 py-2 -mx-3 hover:translate-x-2"
                >
                  Lighting Applications Services
                </Link>
                <Link
                  href="/services"
                  className="block text-white/80 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg px-3 py-2 -mx-3 hover:translate-x-2"
                >
                  Lighting Control System Services
                </Link>
                <Link
                  href="/services"
                  className="block text-white/80 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg px-3 py-2 -mx-3 hover:translate-x-2"
                >
                  Upgrade LED & Retrofit Project
                </Link>
              </div>
            </div>
            <Link
              href="/projects"
              className="block text-white hover:text-white transition-all duration-300 pb-2 border-b border-transparent hover:border-blue-400 hover:bg-white/5 rounded-lg px-3 py-2 -mx-3"
            >
              PROJECTS
            </Link>
            <Link
              href="/partners"
              className="block text-white hover:text-white transition-all duration-300 pb-2 border-b border-transparent hover:border-blue-400 hover:bg-white/5 rounded-lg px-3 py-2 -mx-3"
            >
              PARTNERS
            </Link>
            <Link
              href="/contact-us"
              className="block text-white hover:text-white transition-all duration-300 pb-2 border-b border-transparent hover:border-blue-400 hover:bg-white/5 rounded-lg px-3 py-2 -mx-3"
            >
              CONTACT US
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
