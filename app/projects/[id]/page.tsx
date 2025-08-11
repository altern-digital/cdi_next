"use client";

import { useEffect, useState } from "react";
import { getS3Url } from "@/app/utils/s3File";
import { Image } from "antd";
import { useParams, useRouter } from "next/navigation";
import "antd/dist/reset.css";

interface ProjectData {
  id: string;
  title: string;
  cover?: {
    filename_disk?: string;
  };
  gallery?: {
    id: string;
    directus_files_id?: {
      filename_disk?: string;
    };
  }[];
}

export default function Page() {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    async function fetchProject() {
      try {
        const res = await fetch(`/api-proxy/projects/${id}?fields=*.*.*`, {
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
          if (isMounted) setProject(data.data);
        } else {
          if (isMounted) setProject(null);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        if (isMounted) setProject(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchProject();
    return () => {
      isMounted = false;
    };
  }, [id]);

  useEffect(() => {
    if (!loading && !project) {
      // Use Next.js router to redirect to 404 page on client
      router.replace("/404");
    }
  }, [loading, project, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#232323] text-white flex items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  if (!project) {
    // Optionally, you could return null here since router.replace will handle redirect
    return null;
  }

  return (
    <div className="min-h-screen bg-[#232323] text-white">
      {/* Header */}
      <div className="w-full bg-[#181818] py-8 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
      </div>

      {/* Cover Image */}
      <div className="flex justify-center mt-8">
        <div className="relative w-full max-w-3xl bg-[#222] overflow-hidden shadow-lg">
          <Image
            src={
              project.cover && project.cover.filename_disk
                ? getS3Url(project.cover.filename_disk)
                : "/placeholder.png"
            }
            alt={project.title}
            className="w-full h-full object-contain"
            preview={{
              mask: "Click to preview",
              maskClassName: "text-white",
            }}
          />
        </div>
      </div>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="max-w-5xl mx-auto py-12 px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.gallery.map((item) => (
              <Image
                key={item.id}
                src={
                  item.directus_files_id && item.directus_files_id.filename_disk
                    ? getS3Url(item.directus_files_id.filename_disk)
                    : "/placeholder.png"
                }
                alt={`Gallery image ${item.id}`}
                className="w-full h-full object-contain"
                preview={{
                  mask: "Click to preview",
                  maskClassName: "text-white",
                }}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
