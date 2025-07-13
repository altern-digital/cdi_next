import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      className="w-full min-h-fit bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('/contact.jpg')", //
      }}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify items-center">
        <div className="bg-[#2a2a2a] text-white p-8 md:p-10 shadow-lg max-w-md w-full">
          <p className="text-sm uppercase text-blue-500 mb-2 font-semibold">
            Get Free Quote
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Let’s work together.
          </h2>
          {/* <form className="space-y-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-full bg-[#3a3a3a] text-sm px-4 py-2 outline-none text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-[#3a3a3a] text-sm px-4 py-2 outline-none text-white placeholder-gray-400"
            />
            <input
              type="tel"
              placeholder="Phone *"
              className="w-full bg-[#3a3a3a] text-sm px-4 py-2 outline-none text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Subject *"
              className="w-full bg-[#3a3a3a] text-sm px-4 py-2 outline-none text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Hello, I am interested in..."
              rows={4}
              className="w-full bg-[#3a3a3a] text-sm px-4 py-2 outline-none text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="w-full border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              Send
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}
