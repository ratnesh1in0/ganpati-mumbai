import React, { useState } from 'react';
import { Train, Car, Ban, Phone, AlertTriangle, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { TRANSIT_DATA } from '../data/transitData';
import { useLanguage } from '../hooks/useLanguage';

export const TransitParkingPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'trains' | 'parking' | 'closures' | 'helplines'>('trains');

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-nav md:pb-12 animate-fadeIn space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#F5EBE1] font-display flex items-center gap-2.5">
          <Train className="w-6 h-6 text-[#E2621B]" />
          <span>{t.transitBannerTitle}</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#BDB0A4] mt-1">
          {language === 'mr'
            ? '२४ तास विशेष रात्र लोकल ट्रेन्स, वाहतूक पोलिसांची रस्ते नियमावली आणि अधिकृत वाहनतळ'
            : 'Suburban train night schedules, Mumbai Traffic Police road advisories, and official parking lots'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-2 overflow-x-auto no-scrollbar">
        {[
          { key: 'trains', label: language === 'mr' ? 'लोकल ट्रेन्स व मेट्रो' : 'Suburban Trains & Metro', icon: Train },
          { key: 'parking', label: language === 'mr' ? 'अधिकृत पार्किंग मैदाने' : 'Official Parking Lots', icon: Car },
          { key: 'closures', label: language === 'mr' ? 'रस्ते बंद व वाहतूक बदल' : 'Road Closures', icon: Ban },
          { key: 'helplines', label: language === 'mr' ? 'आपत्कालीन संपर्क' : 'Emergency Helplines', icon: Phone }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === tab.key
                  ? 'bg-[#E2621B] text-[#14100C] shadow-md'
                  : 'bg-[#1D1712] text-[#827367] hover:text-[#F5EBE1]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content: Trains */}
      {activeTab === 'trains' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 text-xs text-blue-200 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">
                {language === 'mr' ? 'मध्य व पश्चिम रेल्वे २४ तास विशेष सेवा' : 'Central & Western Railway 24x7 Night Specials'}
              </span>
              <span>
                {language === 'mr'
                  ? 'गणेशोत्सवादरम्यान मध्यरात्री १:०० ते पहाटे ४:३० दरम्यान विशेष लोकल फेऱ्या सुरू राहतात.'
                  : 'Local trains operate continuously throughout the night during peak festival days. Follow RPF queue management at Currey Road & Chinchpokli bridges.'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRANSIT_DATA.trainSchedules.map((train, i) => (
              <div key={i} className="surface-raised rounded-2xl border border-white/10 p-5 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E2621B]/15 text-[#F59E0B] border border-[#E2621B]/30">
                    {language === 'mr' ? train.timingMr : train.timing}
                  </span>
                  <span className="text-xs text-[#827367] font-mono">
                    {train.from} ➔ {train.to}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#F5EBE1] font-display">
                  {language === 'mr' ? train.lineMr : train.line}
                </h3>

                <p className="text-xs text-[#F59E0B] font-semibold">
                  ⏱ {language === 'mr' ? train.frequencyMr : train.frequency}
                </p>

                {/* Key stops */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#827367] block mb-1">
                    {language === 'mr' ? 'मुख्य स्थानके' : 'Key Pandal Hop Stations'}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {train.keyStops.map((stop, sIdx) => (
                      <span key={sIdx} className="text-[11px] px-2 py-0.5 rounded-md bg-[#14100C] text-[#BDB0A4] border border-white/5">
                        {stop}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#827367] bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                  ℹ️ {language === 'mr' ? train.notesMr : train.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content: Parking */}
      {activeTab === 'parking' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
            <span className="font-bold block">
              {language === 'mr' ? 'वाहतूक सल्ला: खाजगी वाहने टाळा' : 'Traffic Advisory: Prefer Public Transit'}
            </span>
            <span>
              {language === 'mr'
                ? 'लालबाग व गिरगाव परिसरात प्रचंड गर्दी असल्याने लोकल ट्रेनने प्रवास करण्याचा सल्ला दिला जातो. वाहने आणल्यास खालील अधिकृत पार्किंग मैदानातच लावावीत.'
                : 'Central Mumbai experiences severe gridlock during Ganeshotsav. Use local trains where possible. If driving, strictly use designated official parking grounds.'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TRANSIT_DATA.parkingLots.map((lot, idx) => (
              <div key={idx} className="surface-raised rounded-2xl border border-white/10 p-4 space-y-2.5 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E2621B] flex items-center gap-1">
                    <Car className="w-3.5 h-3.5" />
                    {language === 'mr' ? lot.areaMr : lot.area}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Official
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#F5EBE1]">
                  {language === 'mr' ? lot.nameMr : lot.name}
                </h3>

                <div className="text-xs text-[#827367]">
                  <span className="block text-[#F59E0B] font-semibold">
                    🚘 {language === 'mr' ? lot.capacityMr : lot.capacity}
                  </span>
                  <span className="block mt-1 text-[#BDB0A4]">
                    🚶‍♂️ {language === 'mr' ? lot.walkingToMr : lot.walkingTo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content: Road Closures */}
      {activeTab === 'closures' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRANSIT_DATA.roadClosures.map((closure, idx) => (
              <div key={idx} className="surface-raised rounded-2xl border border-red-500/20 p-5 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-950/60 text-red-300 border border-red-500/40 flex items-center gap-1">
                    <Ban className="w-3 h-3" />
                    {closure.activeHours}
                  </span>
                  <span className="text-xs text-[#827367]">
                    {language === 'mr' ? closure.areaMr : closure.area}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#F5EBE1] font-display">
                  {language === 'mr' ? closure.roadMr : closure.road}
                </h3>

                <div className="p-3 rounded-xl bg-[#14100C] border border-white/5 space-y-1.5 text-xs">
                  <p className="text-red-300">
                    ⛔ <strong className="text-[#F5EBE1]">{language === 'mr' ? 'नियंत्रण: ' : 'Restriction: '}</strong>
                    {language === 'mr' ? closure.restrictionMr : closure.restriction}
                  </p>
                  <p className="text-emerald-400">
                    ↪ <strong className="text-[#F5EBE1]">{language === 'mr' ? 'पर्यायी मार्ग: ' : 'Alternate Route: '}</strong>
                    {language === 'mr' ? closure.alternateRouteMr : closure.alternateRoute}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content: Helplines */}
      {activeTab === 'helplines' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRANSIT_DATA.emergencyContacts.map((contact, idx) => (
              <div key={idx} className="surface-raised rounded-2xl border border-white/10 p-5 flex items-center justify-between gap-4 shadow-lg">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#827367]">
                    {contact.category.toUpperCase()}
                  </span>
                  <h3 className="text-sm font-bold text-[#F5EBE1]">
                    {language === 'mr' ? contact.titleMr : contact.title}
                  </h3>
                  <p className="text-xs text-[#BDB0A4]">
                    {language === 'mr' ? contact.descriptionMr : contact.description}
                  </p>
                </div>

                <a
                  href={`tel:${contact.number.split('/')[0].trim()}`}
                  className="px-4 py-2.5 rounded-xl font-mono font-black text-sm bg-[#E2621B] text-[#14100C] hover:bg-[#F07024] transition-all shadow-md shrink-0 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{contact.number}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
