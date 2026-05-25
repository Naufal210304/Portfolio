import React from "react";
import Navbar from "../Components/Navbar.jsx";
import HeroSection from "../Components/Section/HeroSection.jsx";
import MobileBottomNavbar from "../Components/MobileBottomNavbar.jsx"; // Akan dibuat nanti
import AboutSection from "../Components/Section/AboutSection.jsx";
import SkillsSection from "../Components/Section/SkillSection.jsx";
import ProjectsSection from "../Components/Section/ProjectsSection.jsx";
import Certifications from "../Components/Section/Certifications.jsx";
import ContactSection from "../Components/Section/ContactSection.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Desktop Navbar */}
      <Navbar /> {/* Navbar akan diadaptasi menjadi Desktop Navbar */}

      {/* Konten utama di kanan */}
      <main className="relative overflow-x-hidden"> {/* overflow-x-hidden untuk horizontal scroll */}
        {/* Menghapus padding horizontal agar section bisa full width */}
        <div className="w-full"> 
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <Certifications />
          <ProjectsSection />
          <ContactSection />
        </div>

        {/* Mobile Bottom Navbar */}
        <MobileBottomNavbar />
      </main>
    </div>
  );
};

export default MainLayout;
