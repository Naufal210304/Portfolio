import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SkillsSection = () => {
  // Data skill + persentase
  const skills = [
    { name: "JavaScript", level: 40 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "React", level: 55 },
    { name: "Tailwind", level: 75 },
    { name: "Bootstrap", level: 65 },
  ];

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi untuk setiap progress bar
      gsap.utils.toArray('.progress-bar').forEach(bar => {
        const width = bar.style.width; // Ambil lebar akhir dari style
        gsap.fromTo(bar, 
          { width: '0%' }, // Mulai dari 0%
          { 
            width: width, // Animasikan ke lebar akhir
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%', // Mulai saat bar terlihat 90%
              toggleActions: 'play none none none',
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center max-w-[1200px] mx-auto px-8 py-16">
      
      {/* Pseudo-element divider */}
      <div className="flex items-center mb-12">
        <div className="flex-1 h-[2px] bg-white/20"></div>
        <span className="px-4 text-white font-bold text-6xl">
          Skills<span className='text-[#38bdf8]'>.</span>
        </span>
      </div>

      {/* Skill list */}
      <div className="flex flex-col gap-6 w-full">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            {/* Nama skill + persentase */}
            <div className="flex justify-between mb-1 max-w-[1100px]">
              <span className="text-white font-semibold font-mono">{skill.name}</span>
              <span className="text-white font-mono">{skill.level}%</span>
            </div>
            {/* Progress bar */}
            <div className="w-full max-w-[1100px] h-4 bg-white/20 rounded-full">
              <div
                className="progress-bar h-4 bg-[#38bdf8] rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
