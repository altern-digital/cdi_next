import Image from "next/image";

const services = [
  {
    title: "Lighting Applications Services",
    img: "/lighting_application.jpg",
  },
  {
    title: "Lighting Control System Services",
    img: "/lighting_control.jpg",
  },
  {
    title: "Upgrade LED & Retrofit Project",
    img: "/upgrade_LED.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#1e1e1e] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase text-blue-500 tracking-wider mb-2">
          Services
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold mb-2">
          We provide complete project lighting solutions.
        </h2>
        <div className="w-64 h-[2px] bg-blue-500 mx-auto my-12" />
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-[#2a2a2a] shadow-lg">
            <div className="relative w-full h-96">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center text-sm font-medium">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
