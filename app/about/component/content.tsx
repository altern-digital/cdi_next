import Image from "next/image";

export function Content() {
  return (
    <section className="bg-[#222222] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Main Title and Text Content */}
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Story <br /> Of Our Light
            </h2>
            {/* Yellow Divider */}
            <div className="w-64 h-[2px] bg-yellow-400 mt-4 mb-8"></div>

            <div className="space-y-6 text-lg text-gray-300 mb-10 max-w-lg">
              <p>
                The Story began in 2004, when we are just a passionate team of
                lighting "provider". We strive to learn every aspect of light
                with passion. Ten years later, Cahaya Desain Indonesia was
                established in 2015 with its sole purpose to deliver best value
                by adding professionalism to passion.
              </p>
              <p>
                The Vision Of Our Light PROVIDE SOCIETY WITH LIGHTS Strive to be
                the leading company in Architectural Lighting product and
                provide the best choice of lighting product throughout
                Indonesia.
              </p>
            </div>

            <a
              href="#" // Replace with actual profile URL
              className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 self-start"
            >
              Company Profile
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>

          {/* Right Column: Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Creating Customer Oriented Relationship */}
            <div className="relative bg-gradient-to-r from-cyan-600 to-cyan-100 p-6 flex flex-col justify-end overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto">
              <h3 className="relative z-10 text-xl md:text-xl font-bold mb-2">
                Creating Customer Oriented <br className="hidden md:block" />
                “Relationship”
              </h3>
              <div className="w-full h-[2px] bg-yellow-400 mb-2"></div>
              <p className="relative z-10 text-sm text-gray-100">
                Building trust and loyalty is key to successful, long-term
                partnerships with our clients.
              </p>
            </div>
            <div className="relative overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto bg-gray-800">
              <Image
                src="/placeholder-stripes.jpg"
                alt="Colorful vertical light stripes"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>

            {/* Card 2: Provide the best Product and Services */}
            <div className="relative p-6 flex flex-col justify-end overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto">
              <h3 className="relative z-10 text-xl md:text-xl font-bold mb-2">
                Provide the best <br className="hidden md:block" />
                Product & Service”
              </h3>
              <div className="w-full h-[2px] bg-yellow-400 mb-2"></div>
              <p className="relative z-10 text-sm text-gray-100">
                We make sure the best product for every customer design, the
                best products for every customer expectation.
              </p>
            </div>
            <div className="relative overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto bg-gray-800">
              <Image
                src="/placeholder-product.jpg"
                alt="Modern lighting product"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>

            {/* Card 3: Creative, Innovation & Intuitive */}
            <div className="relative p-6 flex flex-col justify-end overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto">
              <h3 className="relative z-10 text-xl md:text-xl font-bold mb-2">
                Creative, Innovation & <br className="hidden md:block" />
                Intuitive
              </h3>
              <div className="w-full h-[2px] bg-yellow-400 mb-2"></div>
              <p className="relative z-10 text-sm text-gray-100">
                Consulting the best choice of product in Creative, Innovative &
                Intuitive ways possible.
              </p>
            </div>
            <div className="relative overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto bg-gray-800">
              <Image
                src="/placeholder-creative.jpg"
                alt="Creative lighting team"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
