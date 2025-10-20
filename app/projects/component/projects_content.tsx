"use client";

import { getS3Url } from "@/app/utils/s3File";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface FileData {
  filename_disk: string;
}

export interface ProjectData {
  id: number;
  title: string;
  cover: FileData;
  gallery: {
    id: number;
    projects_id: number;
    directus_files_id: FileData;
  }[];
}

export default function ProjectContent() {
  const router = useRouter();

  const [highlightedProject, setHighlightedProject] = useState<number | null>(
    null
  );

  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api-proxy/projects?fields=*.*.*");
      const dataJson = await response.json();
      setProjects(dataJson.data.sort((a: ProjectData, b: ProjectData) => b.id - a.id));
    };
    fetchData();
  }, []);

  return (
    <section className="bg-[#1e1e1e] py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-[#2b2b2b] shadow-md cursor-pointer"
            onMouseEnter={() => setHighlightedProject(index)}
            onMouseLeave={() => setHighlightedProject(null)}
            onClick={() => router.push(`/projects/${project.id}`)}
          >
            {/* Image */}
            <div className="relative group h-72 overflow-hidden">
              <Image
                src={
                  project.cover && project.cover.filename_disk
                    ? getS3Url(project.cover.filename_disk)
                    : "/placeholder.png"
                }
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Footer */}
            <div
              className={`text-center py-4 ${
                highlightedProject === index
                  ? "bg-gradient-to-r from-cyan-500 to-blue-300"
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
