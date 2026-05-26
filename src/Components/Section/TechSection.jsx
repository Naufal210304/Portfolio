import React from 'react';

const TechSection = () => {
  const skills = [
    { name: "HTML", slug: "html5" },
    { name: "CSS", slug: "css" },
    { name: "JavaScript", slug: "javascript" },
    { name: "Python", slug: "python" },
    { name: "PHP", slug: "php" },
    { name: "Firebase", slug: "firebase" },
    { name: "MySQL", slug: "mysql" },
    { name: "React", slug: "react" },
    { name: "TailwindCSS", slug: "tailwindcss" },
    { name: "Bootstrap", slug: "bootstrap" }
  ];

  return (
    <section id="skills" className="min-h-screen md:h-screen w-full flex flex-col pt-20 md:pt-28 pb-24 md:pb-12 bg-black">
      {/* Divider - Fixed Position from top */}
      <div className="flex items-center mb-8 md:mb-12 px-8 md:px-16 lg:px-24">
        <span className="pr-6 text-white font-bold text-4xl md:text-6xl tracking-tighter">
          Tech<span className="text-[#38bdf8]">.</span>
        </span>
        <div className="flex-1 h-[1px] bg-white/20"></div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#38bdf8] to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Glass Card */}
              <div className="relative h-32 flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/10">
                
                {/* Tech Icon - Using Simple Icons CDN with Theme Color */}
                <div className="mb-3 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/38bdf8`} 
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <span className="text-white/80 font-medium tracking-wide group-hover:text-[#38bdf8] transition-colors duration-300">
                  {skill.name}
                </span>

                {/* Subtle Bottom Bar Decoration */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#38bdf8] transition-all duration-500 group-hover:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Background Decorative Text (Optional - For Aesthetic) */}
        <div className="mt-12 flex justify-end opacity-5 select-none pointer-events-none">
          <span className="text-8xl md:text-9xl font-bold italic text-white">TECH STACK</span>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
