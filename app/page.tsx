import Navbar from "../components/navbar";
import HeroSection from "../components/home/header_section";
import Services from "../components/home/services_section";
import AboutSection from "../components/home/about_section";
import ProjectsSection from "../components/home/project_section";
import PartnersSection from "../components/home/partner_section";
import ContactSection from "../components/home/contact_sections";
import Footer from "../components/footer_section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Services />
      <AboutSection />
      <ProjectsSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
}
