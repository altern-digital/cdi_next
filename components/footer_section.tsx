"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  // Helper for navigation, similar to @navbar.tsx
  const navigate = (href: string) => {
    router.push(href);
  };

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 text-base font-sans">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700">
        {/* About Us */}
        <div>
          <h3 className="text-blue-300 font-bold text-lg mb-2 tracking-tight">
            About Us
          </h3>
          <div className="border-b border-dashed border-blue-300/50 mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed font-normal">
            The story began in 2004, when we were just a passionate team of
            lighting “provider”. Ten years later, Cahaya Desain Indonesia was
            established in 2015 to deliver best value by adding professionalism
            to passion.
          </p>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-blue-300 font-bold text-lg mb-2 tracking-tight">
            Information
          </h3>
          <div className="border-b border-dashed border-blue-300/50 mb-4" />
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <button
                type="button"
                onClick={() => navigate("/about")}
                className="hover:text-blue-200 transition-colors bg-transparent p-0 m-0 border-none text-inherit cursor-pointer"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate("/projects")}
                className="hover:text-blue-200 transition-colors bg-transparent p-0 m-0 border-none text-inherit cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate("/partners")}
                className="hover:text-blue-200 transition-colors bg-transparent p-0 m-0 border-none text-inherit cursor-pointer"
              >
                Partners
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate("/contact-us")}
                className="hover:text-blue-200 transition-colors bg-transparent p-0 m-0 border-none text-inherit cursor-pointer"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-blue-300 font-bold text-lg mb-2 tracking-tight">
            Services
          </h3>
          <div className="border-b border-dashed border-blue-300/50 mb-4" />
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <button
                type="button"
                onClick={() => navigate("/services/lighting_application")}
                className="hover:text-blue-200 transition-colors bg-transparent p-0 m-0 border-none text-inherit cursor-pointer"
              >
                Lighting Applications Services
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate("/services/lighting_control")}
                className="hover:text-blue-200 transition-colors bg-transparent p-0 m-0 border-none text-inherit cursor-pointer"
              >
                Lighting Control System Services
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate("/services/upgrade_led")}
                className="hover:text-blue-200 transition-colors bg-transparent p-0 m-0 border-none text-inherit cursor-pointer"
              >
                Upgrade LED & Retrofit Project
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-blue-300 font-bold text-lg mb-2 tracking-tight">
            Contact Us
          </h3>
          <div className="border-b border-dashed border-blue-300/50 mb-4" />
          <address className="not-italic text-gray-400 text-sm leading-relaxed font-normal">
            Jl. Bandengan Selatan No.43
            <br />
            Komp. Ruko Duta Mas Blok D No.35
            <br />
            Jakarta Utara - 14450
            <br />
            <br />
            <span className="font-semibold">Indonesia:</span>{" "}
            <a
              href="tel:+622166603550"
              className="hover:text-blue-200 transition-colors"
            >
              +6221 6660 3550
            </a>
            <br />
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:salesproject.cdi@gmail.com"
              className="underline hover:text-blue-200 transition-colors"
            >
              salesproject.cdi@gmail.com
            </a>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black py-5 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="CDI Logo" width={100} height={24} />
            <span className="tracking-tight">
              © 2025 Cahaya Desain Indonesia
            </span>
          </div>
          <span className="mt-2 md:mt-0 tracking-tight">
            PT. Cahaya Desain Indonesia
          </span>
        </div>
      </div>
    </footer>
  );
}
