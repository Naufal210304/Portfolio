import React, { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import projectsData from '../Data/projectsData';

const Projects = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useLayoutEffect(() => {
    // Set background body segera sebelum animasi dimulai
    document.body.style.backgroundColor = "#050505";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animasi Tirai Overlay (Dramatis)
      tl.fromTo(overlayRef.current,
        { xPercent: -100 },
        { xPercent: 100, duration: 1.5, ease: "power2.inOut" }
      )
      // Efek masuk Konten: Bergeser bersamaan dengan overlay namun lebih lambat
      .fromTo(containerRef.current, 
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=1.1" // Mulai sedikit setelah overlay bergerak
      );

      // Animasi kartu muncul satu per satu
      gsap.from(".project-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out"
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const handleBack = () => {
    const tl = gsap.timeline({
      onComplete: () => navigate('/main#projects')
    });

    // Animasi keluar yang simetris dengan overlay
    tl.to(containerRef.current, {
      xPercent: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power4.in"
    })
    .to(overlayRef.current, {
      xPercent: -100,
      duration: 0.8,
      ease: "power2.inOut"
    }, "-=0.6");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505]">
      {/* Dramatic Transition Overlay - Elemen ini yang sebelumnya hilang */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[60] pointer-events-none bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent backdrop-blur-sm border-r border-white/10"
      />

      <main ref={containerRef} className="w-full bg-[#050505] text-white px-8 md:px-16 lg:px-24 pb-20 relative z-10">
        
        {/* Header Section with Integrated Back Button */}
        <div className="flex flex-col pt-16 mb-12">
          {/* Back Button Row - Di atas garis divider */}
          <div className="flex justify-end mb-4">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[#38bdf8] font-bold hover:bg-[#38bdf8] hover:text-black transition-all duration-300 group shadow-lg"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
            </button>
          </div>

          <div className="flex items-center">
            <span className="pr-6 text-white font-bold text-5xl md:text-7xl tracking-tighter">
              All Projects<span className="text-[#38bdf8]">.</span>
            </span>
            <div className="flex-1 h-[1px] bg-white/20"></div>
          </div>
        </div>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="project-card group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#38bdf8]/50 transition-colors duration-500"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#38bdf8] transition-colors">{project.title}</h3>
              <p className="text-white/60 text-sm mb-6 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#38bdf8]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </main>
    </div>
  );
};

export default Projects;