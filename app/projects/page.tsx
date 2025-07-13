import React from "react";
import Navbar from "../navbar";
import ProjectsHero from "./component/projects_header";
import ProjectContent from "./component/projects_content";
import Footer from "../footer_section";

function page() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <ProjectsHero />
      <ProjectContent />
      <Footer />
    </div>
  );
}

export default page;
