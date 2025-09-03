import Image from "next/image";

export default function LightingApplicationContent() {
  return (
    <div className="bg-[#252525] min-h-screen text-white px-6 md:px-48">
      {/* Title */}
      <div className="bg-[#333333] py-12">
        <div className="mb-8 p-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Interior Lighting <br />
            Exterior Lighting <br />
            Architectural Lighting
          </h2>
          <div className="w-24 h-0.5 bg-orange-500 mt-3"></div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Image */}
          <div className="relative w-full h-96">
            <Image
              src="/placeholder-creative.jpg"
              alt="Interior Lighting"
              fill
              className="object-cover px-4"
            />
          </div>

          {/* How We Work */}
          <div className="p-4 rounded-lg">
            <div className="w-full bg-[#1A1A1A] h-16 flex items-center px-4">
              <h4 className="text-lg font-semibold">How we work</h4>
            </div>
            <p className="text-sm leading-relaxed text-gray-300 mt-3">
              Comprehensive communication with owner/user/designer to determine
              functionality and design intent, then supply products according to
              budget and specification.
            </p>
            <p className="text-sm leading-relaxed text-gray-300 mt-3">
              Interior & Exterior lighting specialists to assist and ensure
              correct layouts are implemented and optimum lux levels are met
              according to requirements.
            </p>
            <p className="text-sm leading-relaxed text-gray-300 mt-3">
              Experienced technical team that oversees installation works
              together with electrical contractor to ensure proper cabling
              installation and lighting control system integration.
            </p>
          </div>

          {/* Bottom Image */}
          <div className="relative w-full h-96">
            <Image
              src="/lighting-image-2.jpg"
              alt="Architectural Lighting"
              fill
              className="object-covers px-4"
            />
          </div>

          {/* Area of Application */}
          <div className="p-4 rounded-lg">
            <div className="w-full bg-[#1A1A1A] h-16 flex items-center px-4">
              <h4 className="text-lg font-semibold">Area of Application</h4>
            </div>
            <div className="mt-3">
              <ul className="text-sm text-gray-300 space-y-2">
                <li>- Office & Industry</li>
                <li>- Retail F&B outlets, restaurants, bars, cafes</li>
                <li>
                  - Hospitality: Boutique and luxury hotels, serviced
                  apartments, condominiums
                </li>
                <li>- Private Residences</li>
                <li>- Public Space</li>
                <li>- Architectural Lighting</li>
                <li>- Dynamic Lighting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
