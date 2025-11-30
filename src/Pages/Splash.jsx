import React, { useState, useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Splash = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const splashRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Objek proxy untuk menganimasikan angka
      const counter = { value: 0 };

      // Animasi masuk untuk logo dan progress bar
      tl.from(".splash-logo", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(".progress-container", {
        opacity: 0,
        scaleX: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, "-=0.5");

      // Animasi utama untuk counter dan progress bar
      tl.to(counter, {
        value: 100,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          setProgress(Math.round(counter.value));
        },
      })
      .to(".progress-bar", {
        width: '100%',
        duration: 2.5,
        ease: 'power2.inOut',
      }, "<") // "<" berjalan bersamaan dengan animasi sebelumnya
      .to(".splash-content", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: 'power3.in',
        onComplete: () => {
          // Pindah ke halaman landing setelah animasi selesai
          navigate('/landing');
        }
      });

    }, splashRef);

    return () => ctx.revert();
  }, [navigate]);

  return (
    <section 
      ref={splashRef} 
      className="h-screen w-screen bg-[#050505] flex justify-center items-center text-white"
    >
      <div className="splash-content text-center w-[300px]">
        <h1 className="splash-logo text-7xl font-bold mb-4">
          Mn<span className="text-[#38bdf8]">.</span>
        </h1>
        <div className="progress-container w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="progress-bar h-full bg-[#38bdf8] rounded-full" style={{ width: '0%' }}></div>
        </div>
        <p className="counter text-lg font-mono mt-3">{progress}%</p>
      </div>
    </section>
  );
};

export default Splash;