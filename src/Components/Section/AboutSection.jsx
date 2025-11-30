// src/Sections/AboutSection.jsx
import React, { useLayoutEffect, useRef } from "react";
import AboutBg from "../../Assets/Bg-About.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const AboutSection = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi Parallax untuk background
      gsap.to(bgRef.current, {
        yPercent: 20, // Bergerak ke bawah 20% saat scroll
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // Mulai saat bagian atas section menyentuh bagian bawah viewport
          end: "bottom top", // Selesai saat bagian bawah section menyentuh bagian atas viewport
          scrub: true, // Membuat animasi mengikuti scroll
        },
      });

      // Animasi Fade-in + Slide-up untuk konten
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Mulai saat 80% section terlihat
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative h-screen w-screen overflow-hidden">
      {/* Background full */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${AboutBg})` }}
      ></div>

      {/* Konten About */}
      <div ref={contentRef} className="relative z-10 flex flex-col justify-center h-full px-[120px] py-8">
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
