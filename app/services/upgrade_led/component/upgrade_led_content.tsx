import Image from "next/image";

export default function UpgradeLedContent() {
  return (
    <div className="bg-[#252525] min-h-screen text-white px-6 md:px-48">
      {/* Title */}
      <div className="bg-[#333333] py-12">
        <div className="mb-8 p-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Replacement LED <br />
            Install Lighting System <br />
            DMX Programming
          </h2>
          <div className="w-24 h-0.5 bg-orange-500 mt-3"></div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Image */}
          <div className="relative w-full h-96">
            <Image
              src="/13.jpg"
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
              survey with the eld team to ensure the lights are replaced with
              the right LEDs
            </p>
            <p className="text-sm leading-relaxed text-gray-300 mt-3">
              assisting in providing solutions for using lamps that are
              compatible with existing
            </p>
            <p className="text-sm leading-relaxed text-gray-300 mt-3">
              Installation is a crucial element to ensure the success of a
              project, especially nowadays with the demands of more complex
              smart lighting scenarios that also involve lighting control
              systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
