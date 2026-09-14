import React from 'react';
import { Heart, Shield, Users, Radio, Info, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { GanpatiGlyph } from '../assets/DevotionalIcons';

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-6 pb-nav md:pb-12 animate-fadeIn space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display flex items-center gap-2.5">
          <Info className="w-6 h-6 text-[#E2621B]" />
          <span>{language === 'mr' ? 'या उपक्रमाविषयी' : 'About Mumbai Ganpati Darshan'}</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1">
          {language === 'mr'
            ? 'मुंबईच्या गणेशोत्सवात सहभागी होणाऱ्या करोडो भाविकांच्या सेवेसाठी विनामूल्य व निष्काम उपक्रम'
            : 'A free, non-commercial community initiative created with devotion for Mumbai devotees'}
        </p>
      </div>

      {/* Main Philosophy Card */}
      <div className="surface-raised rounded-2xl border border-white/10 p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#E2621B] to-[#F59E0B] text-[#14100C] shadow-lg">
            <GanpatiGlyph size={32} />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#F5EBE1] font-display">
              Ganpati<span className="text-[#E2621B]">Mumbai</span>
            </h2>
            <span className="text-xs text-[#F59E0B] font-bold">
              {language === 'mr' ? 'गणपती बाप्पा मोरया · मंगलमूर्ती मोरया' : 'Ganpati Bappa Morya · Mangal Murti Morya'}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#BDB0A4] leading-relaxed">
          {language === 'mr'
            ? 'मुंबईचा गणेशोत्सव हा केवळ एक सण नाही, तर ती संपूर्ण मुंबईकरांची अस्मिता, संस्कृती आणि भाविकांची भक्ती आहे. दरवर्षी कोट्यवधी भाविक लालबाग, गिरगाव आणि उपनगरातील मंडळांमध्ये दर्शनासाठी येतात. प्रचंड गर्दी, लांबच लांब रांगा आणि वाहतूक बदलांमुळे भाविकांना अचूक माहिती मिळणे अत्यंत गरजेचे असते. हे लक्षात घेऊन रत्नेश (Ratnesh) यांनी हे विनामूल्य व्यासपीठ निर्माण केले आहे.'
            : 'Mumbai Ganeshotsav is an unmatched global cultural celebration. Millions of devotees take to the streets every day across Lalbaug, Girgaon, Central Mumbai, and the suburbs. Built by Ratnesh with deep devotion, this platform was crafted to provide real-time queue visibility, walkable circuits, and public transit navigation with zero ads, zero tracking, and absolute devotion.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/5 text-xs">
          <div className="p-3.5 rounded-xl bg-[#14100C] border border-white/5 space-y-1">
            <Heart className="w-4 h-4 text-[#E2621B]" />
            <strong className="text-[#F5EBE1] block font-bold">100% Non-Commercial</strong>
            <span className="text-[#827367]">No ads, no paid promotions, no monetization.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#14100C] border border-white/5 space-y-1">
            <Users className="w-4 h-4 text-[#F59E0B]" />
            <strong className="text-[#F5EBE1] block font-bold">Crowdsourced by Devotees</strong>
            <span className="text-[#827367]">Real-time queue updates reported by devotees on the ground.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#14100C] border border-white/5 space-y-1">
            <Shield className="w-4 h-4 text-emerald-400" />
            <strong className="text-[#F5EBE1] block font-bold">Privacy First</strong>
            <span className="text-[#827367]">Your location stays on your device and is never stored.</span>
          </div>
        </div>
      </div>

      {/* Acknowledgements */}
      <div className="surface rounded-2xl border border-white/10 p-6 space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#F59E0B] font-display">
          {language === 'mr' ? 'कृतज्ञता व आभार' : 'Acknowledgements & Sources'}
        </h3>
        <p className="text-xs text-[#BDB0A4] leading-relaxed">
          {language === 'mr'
            ? 'मुंबई पोलीस, बृहन्मुंबई महानगरपालिका (BMC), मध्य व पश्चिम रेल्वे प्रशासन, बेस्ट (BEST), आणि सर्व गणेशोत्सव मंडळांचे स्वयंसेवक जे अहोरात्र भाविकांच्या सेवेसाठी कार्यरत असतात, त्यांचे मनापासून आभार.'
            : 'We express our deepest gratitude to the Mumbai Police, Mumbai Traffic Police, Brihanmumbai Municipal Corporation (BMC), Central & Western Railways, BEST, and the thousands of selfless mandal volunteers who work tirelessly round the clock to ensure safe darshan for millions.'}
        </p>
      </div>
    </div>
  );
};
