"use client";

import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface PageData {
  slug: string;
  title: string;
  body: string;
}

const Page: FC = () => {
  const { slug } = useParams();
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api-proxy/pages/${slug}?fields=*.*.*`);
        const dataJson = await response.json();
        setPage(dataJson.data);
      } catch (e) {
        setPage(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2>Page not found.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#232323] text-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {page.title}
        </h1>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: page.body }}
        />
      </div>
    </div>
  );
};

export default Page;
