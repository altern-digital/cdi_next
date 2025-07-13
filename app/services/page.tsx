import React from "react";
import Navbar from "../navbar";
import { ServicesHeader } from "./component/services_header";
import ServicesContent from "./component/services_content";
import Footer from "../footer_section";

function page() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <ServicesHeader />
      <ServicesContent />
      <Footer />
    </div>
  );
}

export default page;
