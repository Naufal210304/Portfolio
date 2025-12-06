import React, { useLayoutEffect, useRef } from 'react';
// Perbaiki path impor untuk naik satu level dari folder 'Section'
import Lanyard from '../Lanyard'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        }
      });

      // Animasi kolom kiri (Lanyard)
      tl.from(".contact-left", {
        opacity: 0,
        x: -100,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Animasi kolom kanan (Form)
      tl.from(".contact-right", {
        opacity: 0,
        x: 100,
        duration: 0.8,
        ease: 'power3.out'
      }, "<"); // "<" membuat animasi ini berjalan bersamaan dengan sebelumnya

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact" ref={sectionRef}
      className="min-h-screen flex flex-col justify-center max-w-[1200px] mx-auto px-8 py-8 overflow-hidden"
    >
      {/* Divider */}
      <div className="flex items-center mb-12">
        <span className="px-4 text-white font-bold text-6xl">
          Contact<span className="text-[#38bdf8]">.</span>
        </span>
        <div className="flex-1 h-[2px] bg-white/20"></div>
      </div>

      {/* Konten: Kolom Kiri (Info) dan Kolom Kanan (Form) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Kolom Kiri - Komponen Lanyard */}
        <div className="contact-left w-full h-[450px] md:h-[500px]">
          {/* 
            Kita berikan prop `position` untuk mendekatkan kamera.
            - Nilai Z yang lebih kecil akan membuat objek terlihat lebih besar.
            - Nilai Y yang negatif akan membuat kamera lebih rendah, sehingga objek tampak lebih tinggi.
          */}
          <Lanyard position={[0, -2, 16]} />
        </div>

        {/* Kolom Kanan - Form Kontak */}
        <div className="contact-right w-full">
          <form
            action="#" // Ganti dengan endpoint form Anda (misal: Formspree, Netlify)
            method="POST"
            className="flex flex-col gap-6"
          >
            <div>
              <label htmlFor="name" className="block text-white/[.80] mb-2 font-mono">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/[.10] border border-white/[.20] rounded-md p-3 text-white focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] transition-all duration-300 outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/[.80] mb-2 font-mono">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/[.10] border border-white/[.20] rounded-md p-3 text-white focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] transition-all duration-300 outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white/[.80] mb-2 font-mono">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full bg-white/[.10] border border-white/[.20] rounded-md p-3 text-white focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] transition-all duration-300 outline-none"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-[#38bdf8] text-black font-bold rounded-lg hover:bg-[#22d3ee] transition-all duration-300 w-auto cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;