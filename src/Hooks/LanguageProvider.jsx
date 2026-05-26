import React, { useState } from 'react';
import { LanguageContext, translations } from '../Data/LanguageContext.js';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default Inggris

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};