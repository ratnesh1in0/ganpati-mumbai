import React from 'react';
import { HelpCircle, Clock, Train, Footprints, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const HowToUsePage: React.FC = () => {
  const { language } = useLanguage();

  const guides = [
    {
      icon: Clock,
      title: "How Live Queue Tracking Works",
      titleMr: "थेट गर्दी व रांगेची वेळ कशी समजून घ्यावी?",
      desc: "Wait times shown on the website are calculated using a combination of on-ground volunteer reports and real-time devotee submissions. Look for the status badge: Green (< 30m) means brisk flow; Red (> 3h) indicates peak rush.",
      descMr: "वेबसाइटवरील वेळ ही प्रत्यक्ष दर्शनासाठी गेलेल्या भाविकांच्या आणि स्वयंसेवकांच्या ताज्या अहवालांवर आधारित असते. हिरवा रंग म्हणजे वेगवान दर्शन (< ३० मि.), तर लाल रंग म्हणजे मोठी गर्दी (> ३ तास)."
    },
    {
      icon: Sparkles,
      title: "Charan Sparsh vs Mukh Darshan",
      titleMr: "चरणस्पर्श आणि मुखदर्शन यातील फरक",
      desc: "For Lalbaugcha Raja, there are two distinct lines: 'Charan Sparsh' (Navsachi Line) to touch the lotus feet of the idol, which can take 6 to 12+ hours during peak days; and 'Mukh Darshan' (General Line) to view the idol from the pandal gallery, which typically takes 60 to 90 minutes.",
      descMr: "लालबागच्या राजासाठी दोन स्वतंत्र रांगा असतात: 'चरणस्पर्श' (नवसाची रांग) ज्यामध्ये मूर्तीच्या चरणांना स्पर्श करता येतो (प्रतीक्षा ६ ते १२ तास); आणि 'मुखदर्शन' रांग ज्यामध्ये मुख्य सभामंडपातून दर्शन घेता येते (प्रतीक्षा ६० ते ९० मिनिटे)."
    },
    {
      icon: Train,
      title: "Mumbai Local Train & Metro Strategy",
      titleMr: "लोकल ट्रेन आणि प्रवासाचे नियोजन",
      desc: "Avoid driving cars or private vehicles into Lalbaug and Girgaon as roads are heavily barricaded. Use Central Railway to alight at Currey Road or Chinchpokli. During festival nights, Central & Western Railways operate special round-the-clock 24x7 local trains.",
      descMr: "लालबाग आणि गिरगाव भागात वाहनांना बंदी असल्याने लोकल ट्रेनचा वापर करा. मध्य रेल्वेवरील करी रोड किंवा चिंचपोकळी स्थानक वापरा. रात्रीच्या वेळी रेल्वेकडून अखंड २४ तास विशेष लोकल सोडल्या जातात."
    },
    {
      icon: Footprints,
      title: "Walkable Circuits & Footwear Advice",
      titleMr: "पदभ्रमण व पादत्राणांचा सल्ला",
      desc: "Our curated routes group mandals within a 2 to 3 km walking radius. Wear comfortable slip-on footwear (sandals/chappals) as you will need to deposit them outside each pandal. Carry a small shoulder sling bag rather than large backpacks.",
      descMr: "आमचे दर्शन मार्ग २ ते ३ किमी अंतरात आखलेले आहेत. सहज काढता येतील अशी पादत्राणे वापरा, कारण प्रत्येक मंडपात चपला काढाव्या लागतात. मोठ्या बॅगांऐवजी लहान पर्स किंवा स्लिंग बॅग वापरा."
    },
    {
      icon: ShieldCheck,
      title: "Pandal Dress Codes (e.g. Andhericha Raja)",
      titleMr: "मंडळांचे पोशाख नियम (ड्रेस कोड)",
      desc: "Certain mandals, notably Andhericha Raja in Azad Nagar, strictly mandate traditional Indian attire. Shorts, ripped jeans, and sleeveless clothing are barred at security checkpoints.",
      descMr: "अंधेरीच्या राजासारख्या काही प्रमुख मंडळांमध्ये पारंपरिक पोशाखाची सक्ती आहे. शॉर्ट्स किंवा स्लीव्हलेस कपड्यांना प्रवेशद्वारावरच बंदी आहे."
    }
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-6 pb-nav md:pb-12 animate-fadeIn space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display flex items-center gap-2.5">
          <HelpCircle className="w-6 h-6 text-[#E2621B]" />
          <span>{language === 'mr' ? 'कसे वापरावे · दर्शन मार्गदर्शक' : 'How To Use · Devotee Guide'}</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1">
          {language === 'mr'
            ? 'मुंबई गणेशोत्सवाचा परिपूर्ण व सुखद अनुभव घेण्यासाठी उपयुक्त सूचना व टिप्स'
            : 'Essential tips for planning a smooth, safe, and fulfilling Mumbai Ganeshotsav pilgrimage'}
        </p>
      </div>

      {/* Guide Cards */}
      <div className="space-y-4">
        {guides.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="surface-raised rounded-2xl border border-white/10 p-5 sm:p-6 space-y-2 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E2621B]/15 text-[#F59E0B] grid place-items-center shrink-0 border border-[#E2621B]/30">
                  <Icon className="w-4 h-4" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#F5EBE1] font-display">
                  {language === 'mr' ? item.titleMr : item.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#BDB0A4] leading-relaxed pl-12">
                {language === 'mr' ? item.descMr : item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
