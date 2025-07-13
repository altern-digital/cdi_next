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
      <div className="absolute inset-0 bg-opacity-50 z-10 flex justify-end items-center px-4 md:px-16">
        <div className="bg-[#2a2a2a] text-white max-w-lg p-12 md:p-10 shadow-lg">
          <p className="text-sm uppercase text-blue-500 tracking-wider mb-2">
            About Us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The Story Of Our Light
          </h2>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            The story began in 2004, when we were just a passionate team of
            lighting “provider”.
            <br />
            We strive to learn every aspect of light with passion. Ten years
            later, Cahaya Desain Indonesia was established in 2015 with its sole
            purpose to deliver best value by adding professionalism to passion.
          </p>
          <Link
            href="about"
            className="inline-block border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
}
