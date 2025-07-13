import Image from "next/image";

export default function ServicesContent() {
  return (
    <section className="bg-[#222222] text-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We provide complete project <br /> lighting solutions.
            </h2>
            <div className="w-64 h-[2px] bg-yellow-400 mt-2" />
          </div>
          <div className="text-gray-300 text-base leading-relaxed">
            <p>
              Start from concept to delivery and live commissioning, our
              expertise in lighting, control system, project management and
              installation always ensure every project has been taken precisely
              with details attention. Your successful lighting is our driven
              goals.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#2a2a2a] shadow-md">
            <div className="relative w-full h-96">
              <Image
                src="/lighting_application.jpg"
                alt="Lighting Applications Services"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center py-4 text-sm font-medium">
              Lighting Applications Services
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#2a2a2a] shadow-md">
            <div className="relative w-full h-96">
              <Image
                src="/lighting_control.jpg"
                alt="Lighting Control System Services"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center py-4 text-sm font-medium">
              Lighting Control System Services
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#2a2a2a] shadow-md">
            <div className="relative w-full h-96">
              <Image
                src="/upgrade_LED.jpg"
                alt="Upgrade LED & Retrofit Project"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center py-4 text-sm font-medium">
              Upgrade LED & Retrofit Project
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
