import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

// Daftarkan plugin Draggable
gsap.registerPlugin(Draggable);

import Cert1 from '../../Assets/BISA-AI.png';
import Cert2 from '../../Assets/DICODING.jpg';
import Cert3 from '../../Assets/DICODING1.jpg';
import Cert4 from '../../Assets/REVOU.jpg';
import Cert5 from '../../Assets/UNPAM1.jpg';
import Cert6 from '../../Assets/UNPAM2.jpg';

// Array untuk menampung data sertifikat
const certificates = [
  Cert1,
  Cert2,
  Cert3,
  Cert4,
  Cert5,
  Cert6,
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const boxes = gsap.utils.toArray(".cert-card", wrapper);

    const loop = horizontalLoop(boxes, {
      paused: false,
      draggable: true, // Aktifkan fungsionalitas drag
      center: false,
      speed: 0.5, // Kecepatan scroll, bisa disesuaikan
      reversed: false,
      paddingRight: 24, // Sesuaikan dengan gap
    });

    // Pause saat hover
    wrapper.addEventListener("mouseenter", () => loop.pause());
    wrapper.addEventListener("mouseleave", () => loop.play());

    // Fungsi untuk membuat loop horizontal
    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: -1,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        { speed = 1, reversed = false, paddingRight = 0 } = config,
        width = items[0].offsetWidth + paddingRight,
        snap = gsap.utils.snap(width),
        totalWidth = width * items.length,
        // Tambahkan offset untuk menggeser titik awal ke kiri
        startOffset = -width, 
        curX = 0,
        pixelsPerSecond = speed * 100,
        // Sesuaikan populate untuk menggunakan offset
        populate = () => items.forEach((item, i) => gsap.set(item, { x: i * width + startOffset, modifiers: { x: (x) => `${(parseFloat(x) % totalWidth + totalWidth) % totalWidth}px` }})),
        proxy;
      populate();
      gsap.set(items, { x: (i) => i * width + startOffset });
      tl.to(items, { x: `-=${totalWidth}`, duration: totalWidth / pixelsPerSecond, modifiers: { x: (x) => `${(parseFloat(x) % totalWidth + totalWidth) % totalWidth}px` } });
      
      if (config.draggable) {
        proxy = document.createElement("div");
        Draggable.create(proxy, {
          type: "x",
          trigger: wrapper,
          inertia: true,
          onDrag: function() { tl.progress(this.x / -totalWidth); },
          onThrowUpdate: function() { tl.progress(this.x / -totalWidth); }
        });
      }
      return tl;
    }

  }, []);

  return (
     <section id="certifications" ref={sectionRef} className="w-full py-16 overflow-hidden">
      {/* Judul Seksi */}
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex items-center mb-12">
          <span className="px-4 text-white font-bold text-6xl">
            Certifications<span className="text-[#38bdf8]">.</span>
          </span>
          <div className="flex-1 h-[2px] bg-white/20"></div>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div ref={wrapperRef} className="relative flex w-full h-[200px] cursor-grab">
        {certificates.map((cert, idx) => (
          <div key={idx} className="cert-card absolute left-0 top-0 w-[350px] h-[200px] mr-6">
            <img src={cert} alt={`Certificate ${idx + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;