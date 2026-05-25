
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LandingPage from './Pages/LandingPage.jsx'; // Halaman Explore
import Main from './Pages/MainLayout.jsx'; // Halaman Utama
import Splash from './Pages/Splash.jsx'; // Splash Screen
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
