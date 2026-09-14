import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 active:scale-95 cursor-pointer ${
        language === 'mr'
          ? 'bg-[#E2621B]/15 border-[#E2621B]/50 text-[#F59E0B]'
          : 'bg-[#28201A] border-white/10 text-[#F5EBE1] hover:border-[#E2621B]/40'
      } ${className}`}
      title="Switch Language / भाषा बदला"
      aria-label="Switch between English and Marathi"
    >
      <span className={language === 'en' ? 'text-[#F5EBE1] font-bold' : 'text-[#827367]'}>EN</span>
      <span className="text-[#827367]">/</span>
      <span className={language === 'mr' ? 'text-[#F59E0B] font-bold font-marathi' : 'text-[#827367]'}>मराठी</span>
    </button>
  );
};
