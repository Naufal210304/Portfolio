import React from "react";
import ProfileImg from "../../Assets/Profile_port.jpeg";
import { useLanguage } from "../../Data/LanguageContext.js";

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="min-h-screen md:h-screen w-full flex flex-col pt-20 md:pt-28 pb-24 md:pb-12 bg-black overflow-visible md:overflow-hidden">
      {/* Divider - Fixed Position from top */}
      <div className="flex items-center mb-8 md:mb-12 px-8 md:px-16 lg:px-24">
        <span className="pr-6 text-white font-bold text-4xl md:text-6xl tracking-tighter">
          {t.about.title}<span className="text-[#38bdf8]">.</span>
        </span>
        <div className="flex-1 h-[1px] bg-white/20"></div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 gap-12 lg:gap-20">
        {/* Profile Image with Glassmorphism and Glow Effect */}
        <div className="relative group shrink-0">
          {/* Outer Neon Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-blue-900 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Glass Frame */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-3xl shadow-2xl">
            <img 
              src={ProfileImg} 
              alt="Muhammad Naufal" 
              className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Bio Content - Glassmorphism Aesthetic Text */}
        <div className="flex-1 space-y-6 text-white/70 text-lg md:text-xl leading-relaxed font-light text-justify">
          <p>
            {t.about.p1.split("Muhammad Naufal")[0]}<span className="text-white font-medium">Muhammad Naufal</span>{t.about.p1.split("Muhammad Naufal")[1]}
          </p>
          <p>
            {t.about.p2}
          </p>
          <p>
            {t.about.p3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
