import Image from "next/image";

export default function LightingControlContent() {
  return (
    <div className="bg-[#252525] min-h-screen text-white px-6 md:px-48">
      {/* Title */}
      <div className="bg-[#333333] py-12">
        <div className="mb-8 p-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Smart lighting Solution <br />
            Dynamic DMX Lighting <br />
          </h2>
          <div className="w-24 h-0.5 bg-orange-500 mt-3"></div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Image */}
          <div className="relative w-full h-96">
            <Image
              src="/lighting-control-content.jpg"
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
              Identify and propose suitable control system protocols based on
              premise sizes, functionality, inter-connectivity,
              inter-compatibility, and future upgradability. Discuss pros and
              cons of proposals and budget estimates according to each project’s
              requirements.
            </p>
            <p className="text-sm leading-relaxed text-gray-300 mt-3">
              Documentation of lighting and control system shop drawings, with
              structured process of identifying lighting scenes according to
              design intent that are implemented during the installation and
              commissioning.
            </p>
            <p className="text-sm leading-relaxed text-gray-300 mt-3">
              Fine tuning of system controls, automation and lighting scenes to
              the preference and feedback from designer or end user, with system
              program congurations stored and backed-up for contingency
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-evenly p-24">
          {/* Bottom Image */}
          <div className="relative w-1/2 h-48">
            <Image
              src="/phase.png"
              alt="Architectural Lighting"
              fill
              className="object-covers px-4"
            />
          </div>
          <div className="relative w-1/2 h-48">
            <Image
              src="/dali.png"
              alt="Architectural Lighting"
              fill
              className="object-covers px-4"
            />
          </div>
          <div className="relative w-1/2 h-48">
            <Image
              src="/10v.png"
              alt="Architectural Lighting"
              fill
              className="object-covers px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
