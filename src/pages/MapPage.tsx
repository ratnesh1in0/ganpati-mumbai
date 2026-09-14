import React, { useState } from 'react';
import { MumbaiMandalMap } from '../components/map/MumbaiMandalMap';
import { Mandal } from '../data/mandalsData';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Navigation, Radio, Sparkles } from 'lucide-react';
import { LiveBadge } from '../components/common/LiveBadge';

interface MapPageProps {
  mandals: Mandal[];
  onSelectMandal: (mandal: Mandal) => void;
  onRequestLocation: () => void;
  userCoords: { lat: number; lng: number } | null;
  onOpenReportModal: () => void;
}

export const MapPage: React.FC<MapPageProps> = ({
  mandals,
  onSelectMandal,
  onRequestLocation,
  userCoords,
  onOpenReportModal
}) => {
  const { language, t } = useLanguage();
  const [selectedMandalId, setSelectedMandalId] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-6 pt-4 pb-nav md:pb-12 animate-fadeIn space-y-4">
      {/* Header with Title & Quick Report */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-[#F5EBE1] font-display flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#E2621B]" />
            <span>{language === 'mr' ? 'थेट गर्दी नकाशा' : 'Live Crowd Map'}</span>
          </h1>
          <p className="text-xs text-[#BDB0A4]">
            {language === 'mr'
              ? 'मुंबईतील सर्व मंडळांची भौगोलिक ठिकाणे व थेट रांगेची वेळ'
              : 'Interactive mandal map with real-time wait times & transit nodes'}
          </p>
        </div>

        <button
          onClick={onOpenReportModal}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#E2621B] text-[#14100C] hover:bg-[#F07024] cursor-pointer shadow-md"
        >
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span className="hidden sm:inline">{t.reportCrowdBtn}</span>
          <span className="sm:hidden">{language === 'mr' ? 'नोंदवा' : 'Report'}</span>
        </button>
      </div>

      {/* Main Map Container */}
      <MumbaiMandalMap
        mandals={mandals}
        onSelectMandal={(m) => {
          setSelectedMandalId(m.id);
          onSelectMandal(m);
        }}
        selectedMandalId={selectedMandalId}
        userCoords={userCoords}
        onRequestLocation={onRequestLocation}
        heightClass="h-[60vh] sm:h-[68vh]"
      />

      {/* Horizontal Strip of Mandals below the Map for Easy Quick Tapping */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#827367]">
            {language === 'mr' ? 'मंडळे निवडा (नकाशावर पाहण्यासाठी टॅप करा)' : 'Tap to focus mandal on map'}
          </span>
          <span className="text-xs text-[#F59E0B]">
            {mandals.length} {language === 'mr' ? 'मंडळे' : 'total'}
          </span>
        </div>

        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2">
          {mandals.map((m) => {
            const isSelected = selectedMandalId === m.id;
            return (
              <div
                key={m.id}
                onClick={() => {
                  setSelectedMandalId(m.id);
                  onSelectMandal(m);
                }}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer w-[190px] shrink-0 select-none ${
                  isSelected
                    ? 'bg-[#28201A] border-[#E2621B] text-[#F5EBE1] shadow-lg'
                    : 'bg-[#1D1712] border-white/10 text-[#827367] hover:border-white/20'
                }`}
              >
                <p className="text-xs font-bold text-[#F5EBE1] truncate">
                  {language === 'mr' ? m.nameMr : m.name}
                </p>
                <p className="text-[11px] text-[#827367] truncate mt-0.5">
                  {language === 'mr' ? m.areaMr : m.area}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <LiveBadge
                    status={m.crowd.status}
                    waitMinutes={m.crowd.generalWaitMinutes}
                    className="text-[10px] py-0.5 px-2"
                  />
                  <Navigation className="w-3 h-3 text-[#E2621B]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
