import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, Language } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof TRANSLATIONS.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ganpati_lang');
    return (saved === 'mr' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ganpati_lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mr' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language === 'mr' ? 'mr-IN' : 'en-IN';
  }, [language]);

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
