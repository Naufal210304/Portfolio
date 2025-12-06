import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

// Daftar aset yang perlu "dimuat". Bisa berupa URL API, gambar, dll.
const ASSETS_TO_LOAD = [
  'api/user-data',
  'api/projects',
  'images/hero.jpg',
  'images/profile.png',
  'font/custom-font.woff2',
];

// Fungsi untuk mensimulasikan pemuatan satu aset dengan delay acak
// Di aplikasi nyata, ini akan menjadi fetch() atau Image.onload
const fakeLoadAsset = (asset) => {
  return new Promise(resolve => {
    // Delay acak antara 500ms dan 1500ms untuk simulasi jaringan
    const delay = 500 + Math.random() * 1000;
    setTimeout(() => {
      console.log(`Asset loaded: ${asset}`);
      resolve();
    }, delay);
  });
};

const Splash = () => {
  const [progress, setProgress] = useState(0);
  const [loadedAssets, setLoadedAssets] = useState(0);
  const navigate = useNavigate();
  const splashRef = useRef(null);
  const progressBarRef = useRef(null);
  const counterRef = useRef({ value: 0 }); // Ref untuk animasi GSAP

  useLayoutEffect(() => {
    // Animasi masuk awal untuk logo dan container progress bar
    const ctx = gsap.context(() => {
      gsap.from(".splash-logo, .progress-container", {
        opacity: 0, y: -30, stagger: 0.2, duration: 0.8, ease: 'power3.out'
      });
    }, splashRef);

    return () => ctx.revert();
  }, []);

  // Efek untuk memulai proses pemuatan aset
  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = ASSETS_TO_LOAD.length;

    // Fungsi untuk dipanggil setiap kali aset selesai dimuat
    const onAssetLoad = () => {
      loadedCount++;
    };

    // Mulai memuat semua aset secara paralel
    const promises = ASSETS_TO_LOAD.map(asset => fakeLoadAsset(asset).then(onAssetLoad));

    // Set interval untuk mengupdate state progress secara berkala
    const interval = setInterval(() => {
      setLoadedAssets(loadedCount);
      if (loadedCount === totalAssets) {
        clearInterval(interval);
      }
    }, 100); // Update UI setiap 100ms

    const startLoading = async () => {
      await Promise.all(promises);
    };

    startLoading();
  }, []);

  // Efek untuk mengupdate UI (progress bar & persen) ketika aset dimuat
  useEffect(() => {
    const totalAssets = ASSETS_TO_LOAD.length;
    const currentProgress = (loadedAssets / totalAssets) * 100;

    // Animasikan progress bar dan angka ke nilai progress yang baru
    gsap.to(counterRef.current, {
      value: currentProgress,
      duration: 0.5, // Durasi animasi transisi antar progress
      ease: 'power2.out',
      onUpdate: () => {
        setProgress(Math.round(counterRef.current.value));
      }
    });

    gsap.to(progressBarRef.current, {
      width: `${currentProgress}%`,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Jika semua aset sudah dimuat (progress 100%)
    if (loadedAssets === totalAssets) {
      const tl = gsap.timeline({
        delay: 0.5, // Beri jeda sejenak setelah 100%
        onComplete: () => navigate('/landing')
      });

      tl.to(".splash-content", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: 'power3.in',
      });
    }
  }, [loadedAssets, navigate]);

  return (
    <section 
      ref={splashRef} 
      className="h-screen w-screen bg-[#050505] flex justify-center items-center text-white"
    >
      {/* 
        - Lebar diubah menjadi 90% (w-11/12) untuk mobile agar tidak terlalu mepet ke tepi.
        - Untuk layar 640px ke atas (sm:), lebarnya dikembalikan ke 300px.
      */}
      <div className="splash-content text-center w-11/12 sm:w-[300px] overflow-hidden">
        {/* Ukuran font diperkecil di mobile (text-6xl) dan dikembalikan ke 7xl di desktop (sm:) */}
        <h1 className="splash-logo text-6xl sm:text-7xl font-bold mb-4">
          Mn<span className="text-[#38bdf8]">.</span>
        </h1>
        <div className="progress-container w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div ref={progressBarRef} className="progress-bar h-full bg-[#38bdf8] rounded-full" style={{ width: '0%' }}></div>
        </div>
        <p className="counter text-lg font-mono mt-3">{progress}%</p>
      </div>
    </section>
  );
};

export default Splash;