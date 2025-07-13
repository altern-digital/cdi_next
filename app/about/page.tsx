import React from "react";
import Navbar from "../navbar";
import { AboutUsPageHeaderSection } from "./component/aboutus_header_sections";
import { Content } from "./component/content";
import Footer from "../footer_section";

function page() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <AboutUsPageHeaderSection />
      <Content />
      <Footer />
    </div>
  );
}

export default page;
