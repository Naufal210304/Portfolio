import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

import projectsData from '../../data/projectsData'; // Impor data proyek

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-card-horizontal");
      const totalWidth = sections.reduce((acc, section) => acc + section.offsetWidth + 32, 0); // 32px for gap-8

      const scrollTween = gsap.to(sections, {
        x: () => `-${totalWidth - window.innerWidth}`, // Scroll sampai akhir total lebar kartu
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalWidth}`, // Durasi scroll sama dengan total lebar kartu
          invalidateOnRefresh: true,
        },
      });

      // Animasi fade-in untuk setiap kartu proyek saat muncul
      sections.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,  // Mengaitkan dengan animasi horizontal
              start: "left 80%", // Mulai animasi saat kartu masuk 80% dari kiri
              end: "left 20%",   // Akhiri animasi saat kartu keluar 20% dari kiri
              toggleActions: "play none none reverse",
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="h-screen w-full flex flex-col justify-center py-16">
      {/* Pseudo-element divider */}
      <div className="flex items-center mb-12 px-8 md:px-16 lg:px-24">
        {/* Garis ke kiri */}
        <div className="flex-1 h-[2px] bg-white/20"></div>
        {/* Teks di kanan */}
        <span className="px-4 text-white font-bold text-6xl">
          Projects<span className="text-[#38bdf8]">.</span>
        </span>
      </div>

      {/* Konten Project - Horizontal Scroll */}
      <div ref={triggerRef} className="relative w-full h-[500px]"> {/* Tinggi disesuaikan */}
        <div ref={scrollRef} className="flex flex-row gap-8 items-center h-full">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card-horizontal flex-none w-[300px] h-[400px]
                         bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col justify-center items-center
                         border border-white/20 shadow-lg"
              style={{ boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)' }}
            >
              <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 text-center">
                Description for {project.title}. This is a placeholder.
              </p>
              <button className="mt-auto px-4 py-2 bg-[#38bdf8] text-black font-bold rounded-lg hover:bg-[#22d3ee] transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
