import Navbar from "./navbar";
import HeroSection from "./component/home/header_section";
import Services from "./component/home/services_section";
import AboutSection from "./component/home/about_section";
import ProjectsSection from "./component/home/project_section";
import PartnersSection from "./component/home/partner_section";
import ContactSection from "./component/home/contact_sections";
import Footer from "./footer_section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <HeroSection />
      <Services />
      <AboutSection />
      <ProjectsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
