import React from "react";
import Navbar from "../../components/navbar";
import { AboutUsPageHeaderSection } from "./component/aboutus_header_sections";
import { Content } from "./component/content";
import Footer from "../../components/footer_section";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <AboutUsPageHeaderSection />
      <Content />
      {/* Social Media Logos */}
    </div>
  );
}

export default page;
