import { PhoneIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";

export default function ContactCard() {
  return (
    <div className="bg-[#1e1e1e] text-white max-w-md mx-auto p-6 rounded shadow-md">
      {/* Section Title */}
      <p className="text-sm uppercase text-yellow-600 tracking-wider mb-1">
        Lumi Ambience
      </p>
      <h2 className="text-2xl font-bold mb-4">Indonesia</h2>

      {/* Divider */}
      <div className="w-10 h-1 bg-gray-600 mb-4" />

      {/* Contact Info */}
      <div className="space-y-2 bg-[#2a2a2a] divide-y divide-gray-700 rounded overflow-hidden">
        <div className="flex items-center space-x-4 px-4 py-3">
          <PhoneIcon className="w-5 h-5 text-yellow-600" />
          <span className="text-sm">+62 838 1103 0278</span>
        </div>
        <div className="flex items-center space-x-4 px-4 py-3">
          <EnvelopeIcon className="w-5 h-5 text-yellow-600" />
          <span className="text-sm">sales@lumiambience.com</span>
        </div>
        <div className="flex items-center space-x-4 px-4 py-3">
          <HomeIcon className="w-5 h-5 text-yellow-600" />
          <span className="text-sm">
            Palma Tower, 20th Floor, Jl. R.A. Kartini II-S, Kav 6, Jakarta,
            12310
          </span>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-6">
        <iframe
          title="Palma Tower Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.243651021634!2d106.80186507501326!3d-6.232964393756322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1f96f5d0c11%3A0xd7e94665da6b2df5!2sPalma%20Tower!5e0!3m2!1sen!2sid!4v1710600000000!5m2!1sen!2sid"
          width="100%"
          height="200"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md"
        ></iframe>
      </div>
    </div>
  );
}
