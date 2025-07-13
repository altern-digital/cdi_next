import React from "react";
import Navbar from "../../components/navbar";
import { ServicesHeader } from "./component/services_header";
import ServicesContent from "./component/services_content";
import Footer from "../../components/footer_section";

function page() {
  return (
    <div className="min-h-screen">
      <ServicesHeader />
      <ServicesContent />
    </div>
  );
}

export default page;
