import React, { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const LandingPage = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi masuk konten
      gsap.from(".landing-content", {
        opacity: 0,
        scale: 0.9,
        y: 40,
        duration: 1.5,
        ease: "expo.out"
      });
      
      // Efek floating cahaya di background
      gsap.to(".bg-glow", {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Efek kursor mengikuti kursor (Mouse Follower)
      const handleMouseMove = (e) => {
        gsap.to(glowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.7,
          ease: "power3.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-screen bg-[#000000] flex justify-center items-center relative overflow-hidden text-white">
      {/* Cursor Glow Effect */}
      <div 
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-[250px] h-[250px] bg-[#38bdf8] rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2 z-0"
      />

      {/* Background Static Glow Neon */}
      <div className="bg-glow absolute w-[600px] h-[600px] bg-[#38bdf8]/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="landing-content text-center relative z-10 px-6">
        <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
          Mn<span className="text-[#38bdf8]">.</span>
        </h2>
        <p className="text-white mb-12 text-lg md:text-xl font-light tracking-wide max-w-sm mx-auto">
          Ready to explore a little piece of my world?
        </p>
        
        <button 
          onClick={() => navigate('/main')}
          className="group relative px-12 py-5 bg-transparent border border-[#38bdf8]/50 text-[#38bdf8] font-bold text-lg rounded-full 
                     hover:bg-[#38bdf8] hover:text-black hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] 
                     transition-all duration-500 uppercase tracking-[0.3em] overflow-hidden"
        >
          <span className="relative z-10">Explore Now</span>
          <div className="absolute inset-0 bg-[#38bdf8] translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0"></div>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;