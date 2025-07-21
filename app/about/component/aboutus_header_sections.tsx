import Image from "next/image";

export function AboutUsPageHeaderSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about.jpg" // Adjust this path to your image
          alt="Building illuminated with colorful lights"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* Optional: Overlay to make text more readable, adjust opacity as needed */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-4">
        <p className="text-sm uppercase tracking-widest mb-2">ABOUT US</p>
        <h1 className="text-5xl font-bold leading-tight">
          Welcome to PT Cahaya Desain Indonesia
        </h1>
      </div>

      {/* Breadcrumb Bar (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#111] text-gray-300 text-sm px-6 py-3 z-20">
        <span className="mr-2">PT Cahaya Desain Indonesia</span>
        <span className="mx-2">{`>`}</span>
        <span>About Us</span>
      </div>
    </section>
  );
}
