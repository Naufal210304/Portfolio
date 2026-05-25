import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Junior Frontend Developer",
    "React Developer",
    "UI Enthusiast",
    "Creative Web Designer",
    "Interactive Experience Builder",
    "Modern Web Creator",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-8 bg-black">
      
      {/* Header Elements (Scroll with page) */}
      <div className="absolute top-7 left-8 right-8 md:left-16 md:right-16 lg:left-24 lg:right-24 flex justify-between items-center z-10">
        {/* Left Icons Group */}
        <div className="flex items-center gap-6">
          <a 
            href="https://instagram.com/m.naufall21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#38bdf8] transition-all duration-300 drop-shadow-[0_0_8px_rgba(56,189,248,0)] hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
          <button className="text-white/70 hover:text-[#38bdf8] transition-all duration-300 cursor-pointer drop-shadow-[0_0_8px_rgba(56,189,248,0)] hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
            <FontAwesomeIcon icon={faLanguage} size="xl" />
          </button>
        </div>

        {/* Resume Button Right */}
        <button
          onClick={() => window.open("/resume.pdf", "_blank")}
          className="px-6 py-2.5 border border-[#38bdf8] text-[#38bdf8] text-sm font-bold rounded-full bg-transparent hover:bg-[#38bdf8] hover:text-black hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300"
        >
          Download Resume
        </button>
      </div>

      {/* Konten Hero */}
      <div className="flex flex-col items-start gap-3 mt-4 md:pl-12 lg:pl-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
          Hi, I'm <span className="text-[#38bdf8]">Muhammad Naufal.</span>
        </h1>
        <div className="h-10 md:h-12 flex items-center">
          <p className="text-xl md:text-3xl font-mono text-white tracking-tight">
            I'm a <span className="text-[#38bdf8] drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">{text}</span><span className="animate-pulse border-l-2 border-[#38bdf8] ml-1"></span>
          </p>
        </div>
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
