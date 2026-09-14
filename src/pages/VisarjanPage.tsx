import React from 'react';
import { Waves, Calendar, ShieldCheck, MapPin, Train, Sparkles, Navigation } from 'lucide-react';
import { TRANSIT_DATA } from '../data/transitData';
import { useLanguage } from '../hooks/useLanguage';

export const VisarjanPage: React.FC = () => {
  const { language } = useLanguage();

  const immersionDays = [
    { day: "Day 1.5", title: "One-and-a-half Day Visarjan", titleMr: "दीड दिवसांचे गणपती", desc: "Thousands of family household idols immersed across local artificial ponds and beaches." },
    { day: "Day 5", title: "Fifth Day Visarjan & GSB Concluding", titleMr: "पाचव्या दिवसाचे विसर्जन", desc: "Immersion of GSB Seva Mandal Kings Circle Mahaganpati clay idol along with numerous household idols." },
    { day: "Day 7", title: "Gauri-Ganpati Visarjan", titleMr: "गौरी-गणपती विसर्जन", desc: "Emotional immersion of Goddess Gauri idols alongside family Ganpatis with Maharashtrian traditional fare." },
    { day: "Day 10/11", title: "Anant Chaturdashi (The Grand Culmination)", titleMr: "अनंत चतुर्दशी (महाविसर्जन)", desc: "Mumbai's biggest day! Millions take to the streets with Dhol-Tasha, Gulal, and 24-hour processions of Lalbaugcha Raja, Ganesh Galli, and Chintamani to Girgaon Chowpatty." },
    { day: "Day 16", title: "Sankashti Chaturthi (Andhericha Raja)", titleMr: "संकष्टी चतुर्थी (अंधेरीचा राजा)", desc: "Unique 16-day culmination exclusively for Andhericha Raja marching through Versova Beach." }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-nav md:pb-12 animate-fadeIn space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display flex items-center gap-2.5">
          <Waves className="w-6 h-6 text-[#E2621B]" />
          <span>{language === 'mr' ? 'विसर्जन व चौपाटी मार्गदर्शक' : 'Mumbai Visarjan & Beach Guide'}</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1">
          {language === 'mr'
            ? 'अनंत चतुर्दशी महाविसर्जन मिरवणूक मार्ग, चौपाट्या आणि महापालिकेचे पर्यावरणपूरक कृत्रिम तलाव'
            : 'Beach immersion hubs, Anant Chaturdashi procession routes, and BMC eco-friendly artificial lake locations'}
        </p>
      </div>

      {/* Visarjan Calendar Timeline */}
      <div className="surface-raised rounded-2xl border border-white/10 p-5 sm:p-6 space-y-4 shadow-xl">
        <h2 className="text-base font-bold uppercase tracking-wider text-[#F59E0B] font-display flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#E2621B]" />
          <span>{language === 'mr' ? 'विसर्जनाचे मुख्य दिवस व वेळापत्रक' : 'Immersion Days Calendar'}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {immersionDays.map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#14100C] border border-white/10 space-y-1">
              <span className="text-xs font-black text-[#E2621B] font-mono block">
                {item.day}
              </span>
              <h3 className="text-sm font-bold text-[#F5EBE1]">
                {language === 'mr' ? item.titleMr : item.title}
              </h3>
              <p className="text-xs text-[#827367] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Major Beach Spots */}
      <div className="space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-[#F5EBE1] font-display">
          {language === 'mr' ? 'प्रमुख चौपाट्या व विसर्जन स्थळे' : 'Major Immersion Beach Destinations'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRANSIT_DATA.visarjanSpots.map((spot) => (
            <div key={spot.id} className="surface-raised rounded-2xl border border-white/10 p-5 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E2621B]/15 text-[#F59E0B] border border-[#E2621B]/30">
                  {spot.type === 'beach' ? 'Coastal Beach' : 'Eco Artificial Ponds'}
                </span>
                <span className="text-xs text-[#827367] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#E2621B]" />
                  {language === 'mr' ? spot.areaMr : spot.area}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#F5EBE1] font-display">
                {language === 'mr' ? spot.nameMr : spot.name}
              </h3>

              <p className="text-xs text-[#BDB0A4] leading-relaxed">
                {language === 'mr' ? spot.descriptionMr : spot.description}
              </p>

              {/* Nearest Arrival Station */}
              <div className="p-3 rounded-xl bg-[#14100C] border border-white/5 flex items-center gap-2 text-xs">
                <Train className="w-4 h-4 text-[#E2621B] shrink-0" />
                <div>
                  <span className="text-[#827367] block text-[10px] uppercase tracking-wider">
                    {language === 'mr' ? 'सोयीचे रेल्वे स्थानक' : 'Best Arrival Station'}
                  </span>
                  <span className="font-bold text-[#F5EBE1]">
                    {language === 'mr' ? spot.bestArrivalStationMr : spot.bestArrivalStation}
                  </span>
                </div>
              </div>

              {/* Facilities */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#827367] block mb-1">
                  {language === 'mr' ? 'उपलब्ध सुविधा' : 'On-Site BMC & Police Facilities'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(language === 'mr' ? spot.facilitiesMr : spot.facilities).map((fac, fIdx) => (
                    <span key={fIdx} className="text-[11px] px-2 py-0.5 rounded-md bg-[#14100C] text-[#827367] border border-white/5">
                      ✓ {fac}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lalbaugcha Raja Historic Immersion Trail */}
      <div className="surface rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3">
        <h2 className="text-base font-bold text-[#F5EBE1] font-display flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          <span>
            {language === 'mr' ? 'लालबागच्या राजाची ऐतिहासिक २४ तास विसर्जन मिरवणूक' : 'Lalbaugcha Raja’s Historic 24-Hour Procession Route'}
          </span>
        </h2>
        <p className="text-xs text-[#BDB0A4] leading-relaxed">
          {language === 'mr'
            ? 'अनंत चतुर्दशीच्या दिवशी सकाळी १०:०० वाजता लालबाग मार्केटमधून सुरू होणारी ही मिरवणूक दुसऱ्या दिवशी सकाळी ८:०० वाजता गिरगाव चौपाटीवर पोहोचते. वाटेत लाखो भाविक पुष्पवृष्टी करतात.'
            : 'Starting at 10:00 AM on Anant Chaturdashi from Lalbaug Market, the royal chariot moves through Dr. Ambedkar Road, Bharatmata, Chinchpokli, Byculla, Nagpada, Do Taki, Two Tanks, Gulalwadi, CP Tank, and Opera House, reaching Girgaon Chowpatty the following morning around 8:00 AM.'}
        </p>
      </div>
    </div>
  );
};
