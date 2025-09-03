// File: app/services/component/services_item_header.tsx
import Image from "next/image";
import { FC } from "react";

interface ServicesItemHeaderProps {
  heroImageUrl?: string;
  title?: string;
  subtitle?: string;
  companyName?: string;
  currentPageName?: string;
}

export const ServicesItemHeader: FC<ServicesItemHeaderProps> = (
  params: ServicesItemHeaderProps
) => {
  const {
    heroImageUrl = "/core-speciality-hero.jpg",
    title = "Core Speciality",
    subtitle = "Services",
    companyName = "PT Cahaya Desain Indonesia",
    currentPageName = "Services",
  } = params;

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImageUrl}
          alt={title || "Background image"}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 text-center text-white p-4">
        <p className="text-sm uppercase tracking-widest mb-2">{subtitle}</p>
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#111] text-gray-300 text-sm px-6 py-3 z-20 w-full">
        <div className="container mx-auto w-full">
          <span className="mr-2">{companyName}</span>
          <span className="mx-2">{`>`}</span>
          <span>{currentPageName}</span>
        </div>
      </div>
    </section>
  );
};
