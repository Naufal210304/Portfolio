import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Splash = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulasi proses loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Transisi keluar setelah 100%
          setTimeout(() => {
            gsap.to(".splash-wrapper", {
              opacity: 0,
              duration: 0.8,
              onComplete: () => navigate('/landing')
            });
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Durasi loading bar (~3 detik)

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="splash-wrapper h-screen w-screen bg-[#050505] flex flex-col justify-center items-center text-white font-mono overflow-hidden">
      {/* Status Message */}
      <div className="mb-10 text-center px-6">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight">
          Good things take time. <span className="text-[#38bdf8] font-bold animate-pulse">Hang tight!</span>
        </h1>
      </div>

      {/* Futuristic Loading Bar */}
      <div className="w-64 md:w-80 h-[4px] bg-white/10 rounded-full relative overflow-hidden border border-white/5">
        <div 
          className="absolute top-0 left-0 h-full bg-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.8)] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage Info */}
      <div className="mt-6 flex flex-col items-center">
        <span className="text-[#38bdf8] text-lg font-bold tracking-tighter">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default Splash;