import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { Link } from "react-router-dom";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      preset: "links",
      background: {
        color: { value: "#000000" }
      },
      particles: {
        color: { value: "#0818cc" }, // custom particle color
        links: {
          color: "#38bdf8", // custom link color
          enable: true,
          distance: 150,
          opacity: 0.5,
          width: 2
        }
      }
    }),
    []
  );

  if (init) {
    return (
      <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Particles
          id="tsparticles"
          options={options}
          style={{ position: "absolute", width: "100vw", height: "100vh", zIndex: 0 }}
        />
        <div className="flex flex-col items-center justify-center h-screen w-full absolute top-0 left-0 z-10">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 text-center drop-shadow-lg">
            MyPortfolio<span className="text-blue-400">.</span>
          </h1>
          <p className="text-white text-lg md:text-2xl mb-8 text-center max-w-xl drop-shadow">
            Di sini kamu bisa menemukan project, skill, dan sedikit cerita tentang perjalanan saya sebagai developer.
          </p>
          <Link to="/main" className="hover:border-blue-400 border-2 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition duration-200">
            Explore Now
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default App;