import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 text-base">
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700">
        {/* About Us */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg mb-4">
            About Us
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            The story began in 2004, when we were just a passionate team of
            lighting “provider”. We strive to learn every aspect of light with
            passion. Ten years later, Cahaya Desain Indonesia was established in
            2015 with its sole purpose to deliver best value by adding
            professionalism to passion.
          </p>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg mb-4">
            Information
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Partners</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg mb-4">
            Services
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="#">Lighting Applications Services</Link>
            </li>
            <li>
              <Link href="#">Lighting Control System Services</Link>
            </li>
            <li>
              <Link href="#">Upgrade LED & Retrofit project</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg mb-4">
            Contact Us
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
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
      <div className="bg-black py-6 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="CDI Logo" width={120} height={28} />
            <span>© 2025 Cahaya Desain Indonesia</span>
          </div>
          <span className="mt-3 md:mt-0">PT. Cahaya Desain Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
