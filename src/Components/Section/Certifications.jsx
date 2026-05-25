import React from 'react';
// import { gsap } from 'gsap'; // Uncommented as it might be used for animations later
import certificatesData from '../../data/certificatesData'; // Impor data sertifikat

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen w-full flex items-center py-16">
      {/* Anda bisa mengisi konten sertifikasi di sini */}
      <div className="w-full px-8 md:px-16 lg:px-24">
        <div className="flex items-center mb-12">
          <span className="px-4 text-white font-bold text-6xl">
            Certifications<span className="text-[#38bdf8]">.</span>
          </span>
          <div className="flex-1 h-[2px] bg-white/20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg"
                 style={{ boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)' }}>
              <h3 className="text-white text-xl font-bold">{cert.title}</h3>
              {/* <img src={cert.image} alt={cert.title} className="mt-4 w-full h-40 object-cover rounded-lg" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;