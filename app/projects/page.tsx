import React from "react";
import Navbar from "../../components/navbar";
import ProjectsHero from "./component/projects_header";
import ProjectContent from "./component/projects_content";
import Footer from "../../components/footer_section";

function page() {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectContent />
    </div>
  );
}

export default page;
