import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFolderOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MobileBottomNavbar = () => {
  const [active, setActive] = useState("Home");
  const menuItems = [
    { name: "Home", icon: faHome },
    { name: "About", icon: faUser },
    { name: "Projects", icon: faFolderOpen },
    { name: "Contact", icon: faEnvelope },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (let i = menuItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(menuItems[i].name.toLowerCase());
        if (section && section.offsetTop <= scrollPos) {
          setActive(menuItems[i].name);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed bottom-4 left-4 right-4 z-50 flex md:hidden justify-center items-center
                 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-lg
                 transition-all duration-300 ease-in-out"
      style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' }}
    >
      <ul className="flex justify-around w-full py-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={`#${item.name.toLowerCase()}`} onClick={() => setActive(item.name)}
               className={`flex flex-col items-center text-sm font-bold px-3 py-1 rounded-full
                           ${active === item.name ? "text-[#38bdf8] bg-white/10" : "text-white/70"}
                           hover:text-[#38bdf8] transition-colors duration-300`}>
              <FontAwesomeIcon icon={item.icon} size="lg" />
              <span className="mt-1">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileBottomNavbar;