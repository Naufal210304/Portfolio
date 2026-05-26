import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../Data/LanguageContext.js";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const { t } = useLanguage();

  const menuItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.tech, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.cert, href: "#certifications" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActive(name);

    let scrollTarget = href;

    if (href === "#contact") {
      const st = ScrollTrigger.getAll().find((s) =>
        s.trigger?.classList?.contains("flex-nowrap")
      );

      if (st) scrollTarget = st.start + (st.end - st.start);
    }

    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: scrollTarget, autoKill: false },
      ease: "power4.inOut",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = t.nav.home;

      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight / 3 &&
            rect.left <= window.innerWidth / 2
          ) {
            current = item.name;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems, t]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center px-10 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 ease-in-out">
      
      {/* Logo */}
      <div className="text-xl font-bold text-white tracking-tighter mr-8 border-r border-white/20 pr-6">
        Mn<span className="text-[#38bdf8]">.</span>
      </div>

      {/* Navigation */}
      <ul className="flex flex-row gap-8 text-xs uppercase font-bold tracking-[0.2em]">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.name)}
              className={`cursor-pointer transition-all duration-300 ease-in-out hover:text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0)] hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] ${
                active === item.name
                  ? "text-[#38bdf8]"
                  : "text-white/70"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;