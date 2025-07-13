import React from "react";
import Navbar from "../../components/navbar";
import { AboutUsPageHeaderSection } from "./component/aboutus_header_sections";
import { Content } from "./component/content";
import Footer from "../../components/footer_section";

function page() {
  return (
    <div className="min-h-screen">
      <AboutUsPageHeaderSection />
      <Content />
    </div>
  );
}

export default page;
