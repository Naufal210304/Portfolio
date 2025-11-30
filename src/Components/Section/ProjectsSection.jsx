import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ProjectsSection = () => {
  // Data project
  const projects = [
    {
      image: "/images/project1.jpg", // path image atau import
      title: "Project 1",
      description: "Deskripsi singkat project ini. Bisa diisi sesuai project yang kamu buat.",
      tools: ["React", "Tailwind"],
    },
    {
      image: "/images/project2.jpg",
      title: "Project 2",
      description: "Deskripsi singkat project ini. Bisa diisi sesuai project yang kamu buat.",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "/images/project3.jpg",
      title: "Project 3",
      description: "Deskripsi singkat project ini. Bisa diisi sesuai project yang kamu buat.",
      tools: ["React", "Bootstrap"],
    },
  ];

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi untuk setiap kartu proyek
      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.5,
        stagger: 0.2, // Efek muncul satu per satu
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects" ref={sectionRef}
      className="min-h-screen flex flex-col justify-center max-w-[1200px] mx-auto px-8 py-16"
    >
      {/* Pseudo-element divider */}
      <div className="flex items-center mb-12">
        {/* Teks di kanan */}
        <span className="px-4 text-white font-bold text-6xl">
          Projects<span className="text-[#38bdf8]">.</span>
        </span>
        {/* Garis ke kiri */}
        <div className="flex-1 h-[2px] bg-white/20"></div>
      </div>

      {/* Konten Project */}
      <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-card bg-[#111] rounded-xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image project */}
            <div className="h-40 w-full bg-gray-800 rounded-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-white text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[#38bdf8] text-sm font-mono bg-white/10 px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View More di bawah kanan */}
      <div className="flex justify-end">
        <a
          href="#"
          className="text-[#38bdf8] font-bold text-lg border-b-2 border-[#38bdf8] hover:text-white hover:border-white transition-colors duration-300"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
