
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Landing Page
import Main from './Pages/MainLayout.jsx'; // Halaman Utama
import Splash from './Pages/Splash.jsx'; // Splash Screen
import { HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/landing" element={<App />} />
        <Route path="/main" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
