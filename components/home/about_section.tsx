import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative w-full h-screen md:h-[600px] overflow-hidden">
      {/* Background image */}
      <img
        src="/about.jpg"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay & Content */}
      <div className="absolute inset-0 bg-opacity-50 z-10 flex justify-end items-center px-4 container mx-auto">
        <div className="bg-[#2a2a2a] text-white max-w-lg p-12 md:p-10 shadow-lg">
          <p className="text-sm uppercase text-blue-300 tracking-wider mb-2">
            About Us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The Story Of Our Light
          </h2>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed ">
            The story began in 2004, when we were just a passionate team of
            lighting “provider”.
            <br />
            We strive to learn every aspect of light with passion. Ten years
            later, Cahaya Desain Indonesia was established in 2015 with its sole
            purpose to deliver best value by adding professionalism to passion.
          </p>
          <Link
            href="/about"
            className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white overflow-hidden transition-all duration-300 group"
          >
            <span className="relative z-10">Read More</span>
            <span className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-1">
              →
            </span>
            <span className="absolute inset-0 z-0 before:absolute before:inset-0 before:scale-x-0 before:origin-left before:bg-gradient-to-r before:from-cyan-500 before:to-blue-300 before:transition-transform before:duration-500 group-hover:before:scale-x-100 before:z-0 before:content-['']"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
