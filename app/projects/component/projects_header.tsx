import Image from "next/image";

export default function ProjectsHero() {
  return (
    <section className="relative h-[90vh] w-full">
      {/* Background Image */}
      <Image
        src="/contact.jpg"
        alt="Projects Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
        <p className="text-sm uppercase tracking-widest mb-2">
          Great things we’ve done
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="max-w-2xl text-sm md:text-lg leading-relaxed">
          The projects are built by the best talent and using latest
          technologies. The advantages of our building methods and expertise
          guarantee quality for many years to come.
        </p>
      </div>

      {/* Breadcrumb Bar (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#111] text-gray-300 text-sm py-3 z-20">
        <div className="container mx-auto">
          <span className="mr-2">PT Cahaya Desain Indonesia</span>
          <span className="mx-2">{`>`}</span>
          <span>Projects</span>
        </div>
      </div>
    </section>
  );
}
