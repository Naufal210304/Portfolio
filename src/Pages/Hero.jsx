import React from 'react';
import Sidebar from '../Components/Sidebar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AboutBg from '../Assets/Bg-About.jpg';

const Hero = () => {
  return (
    <div className="flex overflow-x-hidden">
      {/* Sidebar kiri */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 min-h-screen bg-[#050505] text-white pl-[170px] p-8">

        {/* Header atas (social + button) */}
        <div className="absolute top-4 left-[170px] right-8 flex justify-between items-center max-w-[calc(100%-170px)]">
          {/* Social icons kiri */}
          <div className="flex gap-4">
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
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="px-4 py-2 border-2 border-[#38bdf8] text-[#38bdf8] font-bold rounded-lg bg-transparent hover:bg-[#38bdf8] hover:text-black transition-all duration-300"
          >
            Download Resume
          </button>
        </div>

        {/* Section Hero */}
        <section className="flex flex-col justify-center items-start h-screen max-w-[1200px]">
          <h1 className="text-8xl font-bold mb-4">
            Hi, I'm <span className="text-[#38bdf8]">Muhammad Naufal.</span>
          </h1>
          <p className="text-2xl mb-6">
            I'm a Beginner Frontend Developer creating interactive experiences on the web.
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-[#38bdf8] text-black font-bold rounded-lg hover:bg-[#22d3ee] transition-all duration-300"
          >
            See My Work
          </a>
        </section>

        {/* Section About */}
        <section className="relative h-screen w-screen -ml-[99px]">
          {/* Background full */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url(${AboutBg})` }}
          ></div>

          {/* Konten About */}
          <div className="relative z-10 flex flex-col justify-center h-full px-[120px] py-8">
            <div className="max-w-xl">
              <h2 className="text-6xl font-bold text-[#3BA2FF] mb-6 drop-shadow-lg">
                About Me
              </h2>
              <p className="text-[#BFD7FF] text-xl leading-relaxed drop-shadow-md">
                Hi! I'm Muhammad Naufal Mufid, a beginner Frontend Developer currently building a strong foundation in JavaScript. I study Informatics Engineering at Universitas Pamulang, where I focus on web development and continuously improve my skills through real projects and hands-on learning. My goal is to become a professional developer who creates clean, modern, and user-centered web experiences.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Hero;
