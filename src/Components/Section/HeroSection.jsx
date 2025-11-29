import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-screen flex flex-col justify-center px-[120px] py-8">
      
      {/* Header di atas Hero */}
      <div className="absolute top-8 left-30 right-50 flex justify-between items-center">
        {/* Social icons kiri */}
        <div className="flex gap-4 items-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38bdf8] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38bdf8] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="2xl" />
          </a>
        </div>

        {/* Button download resume kanan */}
        <button
          onClick={() => window.open("/resume.pdf", "_blank")}
          className="px-4 py-2 w-auto border-2 border-[#38bdf8] text-[#38bdf8] font-bold rounded-lg bg-transparent hover:bg-[#38bdf8] hover:text-black transition-all duration-300"
        >
          Download Resume
        </button>
      </div>

      {/* Konten Hero */}
      <div className="flex flex-col items-start gap-3 mt-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
          Hi, I'm <span className="text-[#38bdf8]">Muhammad Naufal.</span>
        </h1>
        <p className="text-xl md:text-2xl">
          I'm a Beginner Frontend Developer creating interactive experiences on the web.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-[#38bdf8] text-black font-bold rounded-lg hover:bg-[#22d3ee] transition-all duration-300 w-auto"
        >
          See My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
