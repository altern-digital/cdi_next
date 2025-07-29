"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getS3Url } from "@/app/utils/s3File";
import { motion } from "motion/react";
import { easeOutExpo } from "easing-utils";

export function PartnersSection() {
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api-proxy/partners?fields=*.*");
      const dataJson = await response.json();
      setPartners(dataJson.data);
    };
    fetchData();
  }, []);

  return (
    <section className="bg-[#0f0f0f] py-16">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.25 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-items-center">
          {partners.map((item, index) => (
            <div key={index} className="w-40 h-auto group">
              <Image
                src={getS3Url(item.logo.filename_disk)}
                alt={`Partner logo ${index + 1}`}
                width={160}
                height={100}
                className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
