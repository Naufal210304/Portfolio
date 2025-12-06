import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExternalLinkAlt, faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Impor gambar proyek Anda
// Untuk galeri, Anda bisa mengimpor lebih banyak gambar per proyek
import Image1 from '../Assets/Dashboard.png'; // Pastikan path ini benar
import Image2 from '../Assets/Wedding.jpg';
import Image3 from '../Assets/Portfolio.png';
import Image4 from '../Assets/Rent.png';


// Array untuk menampung data semua proyek
// Untuk menambahkan proyek baru, cukup tambahkan objek baru ke dalam array ini.
const projectsData = [
  {
    images: [Image1], // Ubah ke 'images' dan jadikan array
    title: "Smart Online Queue Management System",
    description: "Sistem antrian online real-time yang efisien, memungkinkan pengguna mengambil dan memantau posisi antrian dari jarak jauh. Mengoptimalkan pengalaman pelanggan dengan React dan desain responsif TailwindCSS.",
    tools: ["React", "TailwindCSS", "Firebase"],
    createdAt: "Oktober 2023",
    liveUrl: "#", // Ganti dengan URL live preview
    repoUrl: "#", // Ganti dengan URL repository GitHub
  },
  {
    images: [Image2],
    title: "Wedding Invitation",
    description: "Undangan pernikahan digital interaktif dengan fitur RSVP dan peta. Menggunakan React dan TailwindCSS, diperkaya dengan Framer Motion untuk efek animasi yang mewah dan elegan.",
    tools: ["React", "TailwindCSS", "Framer Motion"],
    createdAt: "September 2023",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    images: [Image3],
    title: "Personal Portfolio",
    description: "Situs portfolio profesional berkinerja tinggi. Dibangun dengan React dan TailwindCSS, memanfaatkan GSAP untuk menciptakan animasi scroll dan transisi yang halus dan dinamis.",
    tools: ["React", "TailwindCSS", "GSAP", "Three.js"],
    createdAt: "November 2023",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    images: [Image4],
    title: "Outdoor Rent",
    description: "Situs rental alat outdoor berkinerja tinggi. Dibangun murni dengan HTML, CSS, dan Vanilla JavaScript — tanpa framework — untuk performa maksimal, bundle kecil, dan kontrol penuh atas animasi dan interaksi.",
    tools: ["HTML", "CSS", "Vanilla JS"],
    createdAt: "November 2023",
    liveUrl: "#",
    repoUrl: "#",
  } 
];

const Projects = () => {
  const mainRef = useRef(null);
  const modalRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi untuk judul dan kartu proyek saat halaman dimuat
      gsap.from(".page-header", { opacity: 0, y: -30, duration: 0.8, ease: 'power3.out' });
      gsap.from(".project-card-small", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.15, // Efek muncul satu per satu
        delay: 0.3, // Mulai setelah header muncul
        ease: 'power3.out'
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  // Animasi untuk modal
  useLayoutEffect(() => {
    const modalElement = modalRef.current;
    if (selectedProject) {
      gsap.to(modalElement, { autoAlpha: 1, duration: 0.3 });
      gsap.fromTo(".modal-content", { y: 50, scale: 0.95 }, { y: 0, scale: 1, duration: 0.4, ease: 'power3.out' });
    } else {
      gsap.to(modalElement, { autoAlpha: 0, duration: 0.3 });
    }
  }, [selectedProject]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    gsap.to(".modal-content", { y: 50, scale: 0.95, opacity: 0, duration: 0.3, ease: 'power3.in', onComplete: () => setSelectedProject(null) });
  };

  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % selectedProject.images.length;
    gsap.to(".modal-image", { opacity: 0, duration: 0.2, onComplete: () => {
      setCurrentImageIndex(newIndex);
      gsap.fromTo(".modal-image", { opacity: 0 }, { opacity: 1, duration: 0.2 });
    }});
  };

  const handlePrevImage = () => {
    const newIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    gsap.to(".modal-image", { opacity: 0, duration: 0.2, onComplete: () => {
      setCurrentImageIndex(newIndex);
      gsap.fromTo(".modal-image", { opacity: 0 }, { opacity: 1, duration: 0.2 });
    }});
  };

  return (
    <main ref={mainRef} className="min-h-screen bg-[#050505] text-white p-4 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header dengan Tombol Kembali */}
        <div className="page-header mb-12">
          <Link to="/main" className="inline-flex items-center gap-3 text-lg text-gray-300 hover:text-[#38bdf8] transition-colors duration-300">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Kembali ke Beranda</span>
          </Link>
          <h1 className="text-5xl sm:text-6xl font-bold mt-4">
            Semua Proyek<span className="text-[#38bdf8]">.</span>
          </h1>
        </div>
        
        {/* Grid untuk Kartu Proyek */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
          {projectsData.map((project, idx) => (
            <div 
              key={idx} 
              onClick={() => handleOpenModal(project)}
              className="project-card-small bg-[#111] rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="h-40 w-full overflow-hidden">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-white truncate">{project.title}</h3>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tools.slice(0, 3).map((tool, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono bg-white/10 text-[#38bdf8] px-2 py-1 rounded">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Proyek */}
      <div ref={modalRef} className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4 invisible" onClick={handleCloseModal}>
        {selectedProject && (
          <div 
            className="modal-content bg-[#111] rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat klik di dalam konten
          >
            {/* Kolom Kiri: Galeri Gambar */}
            <div className="w-full md:w-3/5 relative bg-black">
              <img src={selectedProject.images[currentImageIndex]} alt={selectedProject.title} className="modal-image w-full h-64 md:h-full object-contain" />
              {selectedProject.images.length > 1 && (
                <>
                  <button onClick={handlePrevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button onClick={handleNextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </>
              )}
            </div>

            {/* Kolom Kanan: Detail Teks */}
            <div className="w-full md:w-2/5 p-6 flex flex-col overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <button onClick={handleCloseModal} className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>
              <p className="text-sm text-gray-500 font-mono mb-4">Dibuat: {selectedProject.createdAt}</p>
              <p className="text-gray-300 text-sm mb-6 flex-grow">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="font-bold text-white mb-2">Teknologi</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono bg-white/10 text-[#38bdf8] px-2 py-1 rounded">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 mt-auto text-gray-300">
                <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors duration-300">
                  <FontAwesomeIcon icon={faGithub} size="lg" /> <span className="text-sm">Kode</span>
                </a>
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors duration-300">
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" /> <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;