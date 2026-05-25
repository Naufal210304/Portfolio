import React from "react";
import ProfileImg from "../../Assets/Profile_port.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col justify-center py-20 bg-black overflow-hidden">
      {/* Divider - Title Left, Line Right */}
      <div className="flex items-center mb-16 px-8 md:px-16 lg:px-24">
        <span className="pr-6 text-white font-bold text-5xl md:text-6xl tracking-tighter">
          About<span className="text-[#38bdf8]">.</span>
        </span>
        <div className="flex-1 h-[1px] bg-white/20"></div>
      </div>

      <div className="w-full px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
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
        <div className="flex-1 space-y-6 text-white/70 text-lg md:text-xl leading-relaxed font-light">
          <p>
            My name is <span className="text-white font-medium">Muhammad Naufal</span>, born on March 21, 2004, and currently 22 years old. I am a student at Pamulang University majoring in Informatics Engineering, currently in my 7th semester.
          </p>
          <p>
            I have a strong interest in the world of web development, especially <span className="text-[#38bdf8] italic font-medium">frontend development</span>. I enjoy learning how websites are designed and built, from creating responsive layouts to developing interactive user experiences. Exploring modern technologies like <span className="text-white">React</span> and <span className="text-white font-medium">Tailwind CSS</span> has become one of the things I truly enjoy.
          </p>
          <p>
            For me, web development is not only about writing code, but also about turning ideas into engaging digital experiences. I am always motivated to improve my skills, learn new technologies, and continue growing as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
