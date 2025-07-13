import Image from "next/image";

const projects = [
  {
    title: "Hotel Harris, Tuban",
    image: "/harris.jpg",
  },
  {
    title: "GWK, Bali",
    image: "/gwk.jpg",
  },
  {
    title: "Hotel Pullman Legian Kuta, Bali",
    image: "/pullman.jpg",
    highlight: true, // Will show colored footer
  },
  {
    title: "Plaza Premium Lounge, CGK",
    image: "/plaza.jpg",
  },
  {
    title: "FNF Summarecon Mall Serpong",
    image: "/fnf.jpg",
  },
  {
    title: "Mandiri University, Jakarta",
    image: "/mandiri.jpg",
  },
  {
    title: "Seribu Rasa Restaurant",
    image: "/seribu.jpg",
  },
  {
    title: "Tujuh Beach Club Ubud, Bali",
    image: "/tujuh.jpg",
    highlight: true,
  },
];

export default function ProjectContent() {
  return (
    <section className="bg-[#1e1e1e] py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#2b2b2b] shadow-md">
            {/* Image */}
            <div className="relative group h-72 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition duration-300 group-hover:scale-105"
              />
              {/* Optional Cross Icon (centered) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-5xl opacity-0 group-hover:opacity-80 transition">
                  +
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className={`text-center py-4 ${
                project.highlight
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                  : ""
              }`}
            >
              <p className="text-xs uppercase text-white/70">Projects</p>
              <h3 className="text-sm font-semibold text-white">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
