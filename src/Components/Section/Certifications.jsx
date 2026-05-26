import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap'; // Import gsap
import certificatesData from '../../Data/certificatesData';

const Certifications = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const totalScrollWidth = useRef(0);

  // Duplikasi data agar loop terasa infinite
  const _extendedCerts = [...certificatesData, ...certificatesData];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Use a small timeout to ensure all children are rendered and measured
    const calculateAndStartMarquee = () => {
      const scrollWidth = scrollElement.scrollWidth / 2;
      totalScrollWidth.current = scrollWidth; // Store for drag logic

      if (scrollWidth > 0 && scrollElement.scrollWidth > scrollElement.clientWidth) {
        animationRef.current = gsap.to(scrollElement, {
          x: -scrollWidth,
          duration: 30, // Kecepatan jalan (makin besar makin lambat)
          ease: "none",
          repeat: -1,
        });
      } else {
        console.warn("Certificates content does not overflow, marquee not started.");
      }
    };

    const timeoutId = setTimeout(calculateAndStartMarquee, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  // Fungsi untuk Berhenti & Scale Up saat Hover
  const handleMouseEnter = () => {
    if (animationRef.current) animationRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (!isDragging.current && animationRef.current) {
      animationRef.current.play();
    }
  };

  // Logika Drag Manual
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = gsap.getProperty(scrollRef.current, "x");
    if (animationRef.current) animationRef.current.pause();
    scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // multiplier sensitivitas drag
    const newX = scrollLeft.current + walk;
    // Wrap nilai x saat drag agar looping tidak terputus
    gsap.set(scrollRef.current, { x: gsap.utils.wrap(-totalScrollWidth.current, 0, newX) });
  };

  const onMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab";

    if (animationRef.current && totalScrollWidth.current) {
      const currentX = gsap.getProperty(scrollRef.current, "x");
      
      // Pastikan posisi x tetap dalam range loop [0, -totalScrollWidth] menggunakan wrap
      const wrappedX = gsap.utils.wrap(-totalScrollWidth.current, 0, currentX);
      
      // Update posisi elemen ke nilai yang sudah di-wrap agar transisi mulus
      gsap.set(scrollRef.current, { x: wrappedX });
      
      // Sinkronkan progress animasi (0 sampai 1) dengan posisi x yang baru
      const newProgress = wrappedX / -totalScrollWidth.current;
      animationRef.current.progress(newProgress).play();
    }
  };

  return (
    <section
      id="certifications"
      className="h-screen w-full flex flex-col pt-28 bg-black overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center mb-8 px-8 md:px-16 lg:px-24 shrink-0">
        <span className="pr-6 text-white font-bold text-4xl md:text-6xl tracking-tighter">
          Certificates<span className="text-[#38bdf8]">.</span>
        </span>

        <div className="flex-1 h-[1px] bg-white/20"></div>
      </div>

      {/* Cards */}
      <div className="flex-1 flex items-center overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-8 px-8 py-12 cursor-grab active:cursor-grabbing min-w-max" // Added min-w-max
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          {_extendedCerts.map((cert, index) => (
            <div
              key={index}
              className="group relative flex-none w-[280px] sm:w-[350px] md:w-[450px]"
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8]/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.02] group-hover:border-[#38bdf8]/50 group-hover:z-50 shadow-2xl">
                
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    draggable="false"
                  />
                </div>

                <h3 className="text-white font-bold text-lg md:text-xl tracking-wide group-hover:text-[#38bdf8] transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-white/40 text-xs mt-2 uppercase tracking-widest font-mono">
                  Issued Certificate
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;