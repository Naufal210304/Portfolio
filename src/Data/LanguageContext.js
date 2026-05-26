import { createContext, useContext } from 'react';

export const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      tech: "Tech",
      projects: "Projects",
      cert: "Certificate",
      contact: "Contact"
    },

    hero: {
      hi: "Hi, I'm",
      typingPrefix: "I'm a",
      cta: "See My Work",
      resume: "Download Resume"
    },

    about: {
      title: "About",

      p1: "My name is Muhammad Naufal, born on March 21, 2004, and currently 22 years old. I am a student at Pamulang University majoring in Informatics Engineering, currently in my 7th semester.",

      p2: "I have a strong interest in the world of web development, especially frontend development. I enjoy learning how websites are designed and built, from creating responsive layouts to developing interactive user experiences. Exploring modern technologies like React and Tailwind CSS has become one of the things I truly enjoy.",

      p3: "For me, web development is not only about writing code, but also about turning ideas into engaging digital experiences. I am always motivated to improve my skills, learn new technologies, and continue growing as a developer."
    },

    tech: {
      title: "Tech",
      footer: "TECH STACK"
    },

    projects: {
      title: "Projects",
      viewAll: "View All Projects",
      caseStudy: "Case Study",
      archive: "Archive"
    },

    cert: {
      title: "Certificates",
      issued: "Issued Certificate"
    },

    contact: {
      title: "Contact",
      lets: "Let's",
      connect: "Connect",

      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",

      namePlaceholder: "John Doe",
      emailPlaceholder: "john@example.com",
      subjectPlaceholder: "Project Inquiry",
      placeholder: "Tell me about your project...",

      send: "Send Message"
    },

    allProjects: {
      title: "All Projects",
      back: "Back to Home"
    }
  },

  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      tech: "Skill",
      projects: "Proyek",
      cert: "Sertifikat",
      contact: "Kontak"
    },

    hero: {
      hi: "Halo, Saya",
      typingPrefix: "Saya seorang",
      cta: "Lihat Karya Saya",
      resume: "Unduh Resume"
    },

    about: {
      title: "Tentang",

      p1: "Nama saya Muhammad Naufal, lahir pada 21 Maret 2004, dan saat ini berusia 22 tahun. Saya adalah mahasiswa di Universitas Pamulang jurusan Teknik Informatika, saat ini sedang menempuh semester 7.",

      p2: "Saya memiliki minat yang besar dalam dunia pengembangan web, terutama pengembangan frontend. Saya senang mempelajari bagaimana situs web dirancang dan dibangun, mulai dari membuat tata letak yang responsif hingga mengembangkan pengalaman pengguna yang interaktif. Menjelajahi teknologi modern seperti React dan Tailwind CSS telah menjadi salah satu hal yang sangat saya nikmati.",

      p3: "Bagi saya, pengembangan web bukan hanya tentang menulis kode, tetapi juga tentang mengubah ide menjadi pengalaman digital yang menarik. Saya selalu termotivasi untuk meningkatkan keterampilan saya, mempelajari teknologi baru, dan terus berkembang sebagai pengembang."
    },

    tech: {
      title: "Skill",
      footer: "KUMPULAN TEKNOLOGI"
    },

    projects: {
      title: "Proyek",
      viewAll: "Lihat Semua Proyek",
      caseStudy: "Studi Kasus",
      archive: "Arsip"
    },

    cert: {
      title: "Sertifikat",
      issued: "Sertifikat Diterbitkan"
    },

    contact: {
      title: "Kontak",
      lets: "Mari",
      connect: "Terhubung",

      name: "Nama",
      email: "Email",
      subject: "Subjek",
      message: "Pesan",

      namePlaceholder: "Nama Anda",
      emailPlaceholder: "email@contoh.com",
      subjectPlaceholder: "Diskusi Proyek",
      placeholder: "Ceritakan tentang proyek Anda...",

      send: "Kirim Pesan"
    },

    allProjects: {
      title: "Semua Proyek",
      back: "Kembali"
    }
  }
};