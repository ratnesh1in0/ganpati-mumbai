import React, { useState } from 'react';
import { BookOpen, Languages, Bell } from 'lucide-react';
import { AARTIS_DATA } from '../data/aartisData';
import { useLanguage } from '../hooks/useLanguage';
import { playTempleBell } from '../utils/devotionalAudio';

export const AartiSangrahPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedAartiId, setSelectedAartiId] = useState<string>(AARTIS_DATA[0].id);
  const [showEnglishText, setShowEnglishText] = useState<boolean>(false);

  const currentAarti = AARTIS_DATA.find(a => a.id === selectedAartiId) || AARTIS_DATA[0];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-6 pb-nav md:pb-12 animate-fadeIn space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display flex items-center gap-2.5">
          <BookOpen className="w-6 h-6 text-[#E2621B]" />
          <span>{language === 'mr' ? 'आरती संग्रह व स्तोत्रे' : 'Aarti Sangrah & Devotional Lyrics'}</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1">
          {language === 'mr'
            ? 'सर्व पारंपरिक गणेश आरत्या, घालीन लोटांगण आणि श्री गणपती अथर्वशीर्ष'
            : 'Traditional Marathi aartis, prayers, and Atharvashirsha with English phonetics'}
        </p>
      </div>

      {/* Aarti Selector Strip */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {AARTIS_DATA.map((aarti) => {
          const isSelected = aarti.id === selectedAartiId;
          return (
            <button
              key={aarti.id}
              onClick={() => setSelectedAartiId(aarti.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border select-none ${
                isSelected
                  ? 'bg-[#E2621B] border-[#E2621B] text-[#14100C] shadow-md'
                  : 'bg-[#1D1712] border-white/10 text-[#827367] hover:text-[#F5EBE1] hover:border-white/20'
              }`}
            >
              {language === 'mr' ? aarti.titleMr : aarti.title}
            </button>
          );
        })}
      </div>

      {/* Reader Card */}
      <div className="surface-raised rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        {/* Top bar with switch */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#F59E0B] font-display">
              {language === 'mr' ? currentAarti.titleMr : currentAarti.title}
            </h2>
            <span className="text-xs text-[#827367] mt-0.5 block">
              {language === 'mr' ? currentAarti.authorMr : currentAarti.author}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={playTempleBell}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-[#E5A93C]/40 bg-[#E5A93C]/10 text-[#F59E0B] hover:bg-[#E5A93C]/20 transition-all cursor-pointer active:scale-95 shadow-sm"
              title="Sound the Temple Bell"
            >
              <Bell className="w-3.5 h-3.5 text-[#F59E0B] animate-bounce" />
              <span>{language === 'mr' ? 'घंटा नाद' : 'Bell Chime'}</span>
            </button>

            {/* Marathi vs English lyrics toggle */}
            <button
              type="button"
              onClick={() => setShowEnglishText(!showEnglishText)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-white/10 bg-[#14100C] text-[#BDB0A4] hover:border-[#E2621B]/40 hover:text-[#F5EBE1] cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5 text-[#E2621B]" />
              <span>{showEnglishText ? 'मराठी देवनागरी' : 'English Phonetics'}</span>
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#BDB0A4] italic border-l-2 border-[#E2621B] pl-3 py-0.5">
          {language === 'mr' ? currentAarti.descriptionMr : currentAarti.description}
        </p>

        {/* Lyrics Area */}
        <div className="py-4 text-center sm:text-left space-y-2">
          {(showEnglishText ? currentAarti.lyricsEnglish : currentAarti.lyricsMarathi).map((line, idx) => (
            line === "" ? (
              <div key={idx} className="h-4" />
            ) : (
              <p
                key={idx}
                className={`text-sm sm:text-base leading-relaxed tracking-wide ${
                  line.includes("जय देव जय देव") || line.includes("Jai Dev Jai Dev")
                    ? "font-bold text-[#F59E0B] text-base sm:text-lg"
                    : "text-[#F5EBE1]"
                } ${!showEnglishText ? 'font-marathi' : 'font-sans'}`}
              >
                {line}
              </p>
            )
          ))}
        </div>
      </div>
    </div>
  );
};
