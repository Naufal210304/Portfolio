import React, { useLayoutEffect } from "react";
import Sidebar from "../Components/Sidebar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import HeroSection from "../Components/Section/HeroSection.jsx";
import AboutSection from "../Components/Section/AboutSection.jsx";
import SkillsSection from "../Components/Section/SkillSection.jsx";
import ProjectsSection from "../Components/Section/ProjectsSection.jsx";
import ContactSection from "../Components/Section/ContactSection.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const MainLayout = () => {
  return (
    <div className="min-h-screen flex bg-[#050505] text-white overflow-x-hidden">
      {/* Sidebar kiri */}
      <aside className="w-[38px] shrink-0">
        <Sidebar />
      </aside>

      {/* Konten utama di kanan */}
      <main className="flex-1 relative">
        {/* Header atas (social + button) */}
        {/* Wrapper konten biar gak ketabrak header */}
        <div className="px-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
