import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const menuItems = ["Home", "About", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3; // offset supaya detect lebih awal

      for (let i = menuItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(menuItems[i].toLowerCase());
        if (section && section.offsetTop <= scrollPos) {
          setActive(menuItems[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-full w-[70px] flex-col items-center bg-black text-white py-4">
      {/* Logo atas */}
      <h1 className="mb-10 text-xl font-bold">
        Mn<span className="text-[#0818cc]">.</span>
      </h1>

      {/* Navbar vertikal */}
      <ul className="mt-auto mb-auto flex flex-row gap-10 [writing-mode:vertical-rl] text-[15px] tracking-[0.2em] uppercase font-bold relative">
        {menuItems.map((item) => (
          <li key={item} className="relative">
            {/* Garis vertical di sebelah kanan sidebar */}
            {active === item && (
              <span className="absolute right-[-22px] top-0 h-full w-[3px] bg-[#38bdf8] rounded transition-all duration-300"></span>
            )}
            <a
              onClick={() => setActive(item)}
              href={`#${item.toLowerCase()}`}
              className={`cursor-pointer hover:opacity-70 hover:text-[#38bdf8] transition-all duration-300 ease-in-out ${
                active === item ? "text-[#38bdf8]" : ""
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
