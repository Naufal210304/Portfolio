import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificate", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActive(item.name);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center px-10 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 ease-in-out">
      {/* Logo Section */}
      <div className="text-xl font-bold text-white tracking-tighter mr-8 border-r border-white/20 pr-6">
        Mn<span className="text-[#38bdf8]">.</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-row gap-8 text-xs uppercase font-bold tracking-[0.2em]">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`cursor-pointer transition-all duration-300 ease-in-out hover:text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0)] hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] ${
                active === item.name ? "text-[#38bdf8]" : "text-white/70"
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
