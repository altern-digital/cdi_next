import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 text-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">
        {/* About Us */}
        <div>
          <h3 className="text-blue-500 font-semibold mb-2">About Us</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            The story began in 2004, when we were just a passionate team of
            lighting “provider”. Ten years later, Cahaya Desain Indonesia was
            established in 2015 to deliver best value by adding professionalism
            to passion.
          </p>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-blue-500 font-semibold mb-2">Information</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/partners">Partners</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-blue-500 font-semibold mb-2">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/services">Lighting Applications Services</Link>
            </li>
            <li>
              <Link href="/services">Lighting Control System Services</Link>
            </li>
            <li>
              <Link href="/services">Upgrade LED & Retrofit Project</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-blue-500 font-semibold mb-2">Contact Us</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Jl. Bandengan Selatan No.43
            <br />
            Komp. Ruko Duta Mas Blok D No.35
            <br />
            Jakarta Utara - 14450
            <br />
            <br />
            Indonesia: +6221 6660 3550
            <br />
            Email:{" "}
            <a href="mailto:salesproject.cdi@gmail.com" className="underline">
              salesproject.cdi@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black py-4 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="CDI Logo" width={100} height={24} />
            <span>© 2025 Cahaya Desain Indonesia</span>
          </div>
          <span className="mt-2 md:mt-0">PT. Cahaya Desain Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
