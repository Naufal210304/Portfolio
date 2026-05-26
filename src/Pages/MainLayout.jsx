import React, { useLayoutEffect, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../Components/Navbar.jsx";
import HeroSection from "../Components/Section/HeroSection.jsx";
import MobileBottomNavbar from "../Components/MobileBottomNavbar.jsx";
import AboutSection from "../Components/Section/AboutSection.jsx";
import TechSection from "../Components/Section/TechSection.jsx";
import ProjectsSection from "../Components/Section/ProjectsSection.jsx";
import Certifications from "../Components/Section/Certifications.jsx";
import ContactSection from "../Components/Section/ContactSection.jsx";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { LanguageProvider } from "../Hooks/LanguageProvider.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MainLayout = () => {
  const location = useLocation();
  const horizontalWrapperRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = horizontalWrapperRef.current.querySelectorAll(".horizontal-section");
      
      const horizontalTween = gsap.timeline({
        scrollTrigger: {
          trigger: horizontalWrapperRef.current,
          start: "top top",
          // Dibuat lebih panjang agar transisi terasa berat dan mantap
          end: () => "+=" + (window.innerWidth * 10), 
          scrub: true, // Kontrol 1:1, tidak ada gerakan otomatis setelah dilepas
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 0, 
          markers: false
        }
      });

      // 1. Jeda Awal (Dead Zone)
      horizontalTween.to({}, { duration: 1 });

      // 2. Animasi Utama: Geser section ke kiri
      horizontalTween.to(sections, { 
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        duration: 4
      });

      // 3. Reveal Teks "Let's Connect"
      // Mulai muncul saat pergeseran masuk 40% (Time 1 + (4 * 0.4) = 2.6)
      horizontalTween.fromTo(".contact-text-reveal", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, ease: "none", duration: 2.4 }, 
        2.6
      );

      // 4. Animasi Arrow (Terjadi saat halaman SUDAH 100% di section contact tapi tetap diam/pinned)
      horizontalTween.fromTo(".contact-arrow",
        { opacity: 0, scale: 0.3, transformOrigin: "top center" },
        { opacity: 1, scale: 1, ease: "power2.out", duration: 3 },
        5 // Dimulai tepat setelah pergeseran horizontal (Jeda 1 + Geser 4 = 5) selesai
      );

      // 5. Jeda Akhir sebelum Pin dilepas (Halaman diam sebentar setelah arrow full)
      horizontalTween.to({}, { duration: 2 });
      
      // Trigger refresh global setelah semua timeline terdaftar
      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#050505";
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          let scrollTarget = element;
          
          // Jika target adalah contact, kita harus scroll ke akhir pinned area
          if (id === "contact") {
            const st = ScrollTrigger.getAll().find(st => st.trigger === horizontalWrapperRef.current);
            if (st) scrollTarget = st.start + (st.end - st.start);
          }

          gsap.to(window, {
            duration: 1,
            scrollTo: scrollTarget,
            ease: "power2.out",
          });
        }, 10);
      }
    }
  }, [location]);

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      <main className="relative overflow-x-hidden">
        <div className="w-full">
          <HeroSection />

          <AboutSection />

          <TechSection />

          <ProjectsSection />

          {/* Horizontal Scroll Section */}
          <div
            ref={horizontalWrapperRef}
            className="flex flex-nowrap overflow-hidden"
            style={{ width: "200vw" }}
          >
            <div className="horizontal-section w-screen flex-none">
              <Certifications />
            </div>

            <div className="horizontal-section w-screen flex-none">
              <ContactSection />
            </div>
          </div>
        </div>

        <MobileBottomNavbar />
      </main>
    </div>
    </LanguageProvider>
  );
};

export default MainLayout;