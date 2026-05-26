import React, { useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectsData from '../../data/projectsData'; 

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const viewMoreRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      
      // Timeline untuk efek stacking
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`, // Durasi scroll berdasarkan jumlah kartu
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1 // Dihitung lebih dulu daripada section di bawahnya
        },
      });

      // Animasikan kartu 2 dan seterusnya untuk meniban kartu sebelumnya
      cards.forEach((card, index) => {
        if (index > 0) {
          tl.fromTo(card, 
            { y: "120%", rotate: 2 }, 
            { y: "0%", rotate: 0, duration: 1, ease: "power2.out" },
            "-=0.5" // overlap animasi sedikit agar lebih smooth
          );
        }
        
        // Berikan efek scale down sedikit pada kartu yang tertiban agar ada efek kedalaman (depth)
        if (index < cards.length - 1) {
          tl.to(card, { 
            scale: 0.95, 
            opacity: 0.5, 
            duration: 1 
          }, "-=0.5");
        }
      });

      // Munculkan tulisan View More di paling akhir
      tl.fromTo(viewMoreRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5 }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Kita hanya ambil 3 data teratas sesuai permintaan
  const limitedProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" ref={sectionRef} className="h-screen w-full flex flex-col bg-black overflow-hidden">
      {/* Divider - Adjusted padding and margin to save vertical space */}
      <div className="flex items-center pt-24 mb-6 px-8 md:px-16 lg:px-24 shrink-0">
        <span className="pr-6 text-white font-bold text-5xl md:text-6xl tracking-tighter">
          Projects<span className="text-[#38bdf8]">.</span>
        </span>
        <div className="flex-1 h-[1px] bg-white/20"></div>
      </div>

      <div ref={containerRef} className="relative flex-1 w-full max-w-6xl mx-auto px-8 pb-12 flex flex-col justify-between">
        {/* Card Deck - Reduced height from 70vh to 60vh to prevent overflow */}
        <div className="relative w-full h-[60vh]">
          {limitedProjects.map((project, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="absolute inset-0 w-full h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 shadow-2xl overflow-hidden"
              style={{ zIndex: index }}
            >
              {/* Project Info */}
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-[#38bdf8] font-mono mb-2 text-sm tracking-widest uppercase">Archive 0{index + 1}</span>
                <h3 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">{project.title}</h3>
                <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="w-fit px-8 py-3 bg-[#38bdf8] text-black font-bold rounded-full hover:scale-105 transition-transform">
                  Case Study
                </button>
              </div>

              {/* Project Image Placeholder / Decorative Element */}
              <div className="flex-1 hidden md:block relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/20 to-transparent rounded-2xl"></div>
                <div className="w-full h-full border border-white/10 rounded-2xl overflow-hidden bg-white/5 relative">
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Trigger */}
        <div ref={viewMoreRef} className="flex justify-center items-center gap-4 mt-auto">
           <div className="h-[1px] w-12 bg-white/20"></div>
           <button 
            onClick={() => navigate('/projects')}
            className="text-[#38bdf8] font-bold tracking-widest uppercase text-sm hover:underline"
           >
             View All Projects
           </button>
           <div className="h-[1px] w-12 bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
