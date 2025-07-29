import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeOutExpo } from "easing-utils";

// From: components/home/header_section.tsx
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

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    if (isTransitioning) return;
    setDirection(1);
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    resetAutoSlide();
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setDirection(-1);
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoSlide();
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === current) return;
    setDirection(index > current ? 1 : -1);
    setIsTransitioning(true);
    setCurrent(index);
    resetAutoSlide();
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isTransitioning) {
        setDirection(1);
        setIsTransitioning(true);
        setCurrent((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 7000);
  };

  // Initialize auto-slide only on client side
  useEffect(() => {
    resetAutoSlide();

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const slide = slides[current];

  // Animation variants for framer-motion
  const textVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 40 : -40,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? -40 : 40,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  const imageVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 60 : -60,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOutExpo },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -60 : 60,
      transition: { duration: 0.7, ease: easeOutExpo },
    }),
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-black text-white overflow-hidden container mx-auto">
      {/* Background Image for mobile */}
      <div className="absolute inset-0 md:hidden z-0">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={imageVariants as any}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
            style={{ willChange: "opacity, transform" }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover brightness-75"
              priority={current === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Left Content */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 md:py-0 min-h-[60vh] md:min-h-0"
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.25 }}
      >
        {/* Prev button - hidden on small screens */}
        <button
          onClick={goToPrev}
          disabled={isTransitioning}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-50 p-2 rounded-full text-white z-20 transition-all duration-300 transform hover:scale-100"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <div className="w-full max-w-lg">
          <div className="text-sm tracking-widest text-gray-400 mb-4 flex items-center">
            <span className="inline-block w-10 h-[2px] bg-white mr-2 align-middle" />
            <span className="align-middle">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="overflow-hidden min-h-[140px] sm:min-h-[160px] md:min-h-[180px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={textVariants as any}
                initial="initial"
                animate="animate"
                exit="exit"
                className=""
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug">
                  {slide.title}
                </h1>

                <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 w-full">
            <Link
              href="/services"
              className="relative inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold text-white border border-white overflow-hidden transition-all duration-300 group hover:scale-100 w-full sm:w-auto justify-center"
            >
              <span className="relative z-10 text-ellipsis whitespace-nowrap">
                View Services
              </span>
              <span className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-1">
                →
              </span>
              <span className="absolute inset-0 z-0 before:absolute before:inset-0 before:scale-x-0 before:origin-left before:bg-gradient-to-r before:from-cyan-500 before:to-blue-300 before:transition-transform before:duration-500 group-hover:before:scale-x-100 before:z-0 before:content-['']"></span>
            </Link>

            <Link
              href="/contact-us"
              className="relative inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold text-white border border-white overflow-hidden transition-all duration-300 group hover:scale-100 w-full sm:w-auto justify-center"
            >
              <span className="relative z-10 text-ellipsis whitespace-nowrap">
                Contact Us
              </span>
              <span className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-1">
                →
              </span>
              <span className="absolute inset-0 z-0 before:absolute before:inset-0 before:scale-x-0 before:origin-left before:bg-gradient-to-r before:from-cyan-500 before:to-blue-300 before:transition-transform before:duration-500 group-hover:before:scale-x-100 before:z-0 before:content-['']"></span>
            </Link>
            <Link
              href="/compro.pdf"
              className="relative inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold text-white border border-white overflow-hidden transition-all duration-300 group hover:scale-100 w-full sm:w-auto justify-center"
            >
              <span className="relative z-10 text-ellipsis whitespace-nowrap">
                Company Profile
              </span>
              <span className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-1">
                →
              </span>
              <span className="absolute inset-0 z-0 before:absolute before:inset-0 before:scale-x-0 before:origin-left before:bg-gradient-to-r before:from-cyan-500 before:to-blue-300 before:transition-transform before:duration-500 group-hover:before:scale-x-100 before:z-0 before:content-['']"></span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Right Image for desktop */}
      <div className="hidden md:flex md:w-1/2 relative h-100vh min-h-[400px] lg:min-h-0 lg:h-auto">
        {/* Background Images Container */}
        <div className="absolute inset-0">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={imageVariants as any}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
              style={{ willChange: "opacity, transform" }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-75"
                priority={current === 0}
                sizes="50vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next button - hidden on small screens */}
        <button
          onClick={goToNext}
          disabled={isTransitioning}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-50 p-2 rounded-full text-white z-20 transition-all duration-300 transform hover:scale-100"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        <button
          onClick={goToPrev}
          disabled={isTransitioning}
          className="bg-black/50 hover:bg-black/70 disabled:opacity-50 p-2 rounded-full text-white transition-all duration-300"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={isTransitioning}
          className="bg-black/50 hover:bg-black/70 disabled:opacity-50 p-2 rounded-full text-white transition-all duration-300"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
