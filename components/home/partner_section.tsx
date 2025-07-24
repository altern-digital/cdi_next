import Image from "next/image";

const partners = [
  "/lenore.jpg",
  "/colors.jpg",
  "/elr.jpg",
  "/opple.jpg",
  "/casambi.jpg",
  "/meanwell.jpg",
  "/helvar.jpg",
  "/euchips.jpg",
  "/epistar.jpg",
];

export default function PartnersSection() {
  return (
    <section className="bg-[#0f0f0f] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-items-center">
          {partners.map((src, index) => (
            <div key={index} className="w-40 h-auto">
              <Image
                src={src}
                alt={`Partner logo ${index + 1}`}
                width={160}
                height={100}
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
