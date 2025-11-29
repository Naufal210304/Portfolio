// src/Sections/AboutSection.jsx
import React from "react";
import AboutBg from "../../Assets/Bg-About.jpg";


const AboutSection = () => {
  return (
    <section id="about" className="relative h-screen w-screen ">
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
            Hi! I'm Muhammad Naufal Mufid, a beginner Frontend Developer currently building a
            strong foundation in JavaScript. I study Informatics Engineering at Universitas
            Pamulang, where I focus on web development and continuously improve my skills
            through real projects and hands-on learning. My goal is to become a professional
            developer who creates clean, modern, and user-centered web experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
