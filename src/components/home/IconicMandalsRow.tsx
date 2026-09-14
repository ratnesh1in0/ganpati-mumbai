import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LocateFixed, Sparkles } from 'lucide-react';
import { Mandal } from '../../data/mandalsData';
import { useLanguage } from '../../hooks/useLanguage';
import { MandalCard } from '../mandal/MandalCard';

interface IconicMandalsRowProps {
  mandals: Mandal[];
  savedIds: string[];
  onSelectMandal: (mandal: Mandal) => void;
  onToggleSave: (id: string) => void;
  onRequestLocation: () => void;
  userCoords: { lat: number; lng: number } | null;
  calculateDistance: (lat: number, lng: number) => number | null;
}

export const IconicMandalsRow: React.FC<IconicMandalsRowProps> = ({
  mandals,
  savedIds,
  onSelectMandal,
  onToggleSave,
  onRequestLocation,
  userCoords,
  calculateDistance
}) => {
  const { language, t } = useLanguage();

  // Sort by closest if user location is active
  const sortedMandals = [...mandals].sort((a, b) => {
    if (userCoords) {
      const distA = calculateDistance(a.coordinates.lat, a.coordinates.lng) || 999;
      const distB = calculateDistance(b.coordinates.lat, b.coordinates.lng) || 999;
      return distA - distB;
    }
    return 0; // maintain default order
  });

  return (
    <section className="mt-9">
      {/* Section Header */}
      <div className="mb-2 flex items-baseline justify-between gap-3 px-4 sm:px-6">
        <div className="min-w-0">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#F5EBE1] flex items-center gap-2">
            <span>{t.iconicMandalsHeading}</span>
          </h2>
          <p className="text-xs text-[#827367] font-marathi">
            {t.iconicMandalsSub}
          </p>
        </div>
        <Link
          to="/explore"
          className="-mr-1 flex items-center gap-0.5 px-2 py-1 text-xs font-semibold text-[#E2621B] hover:text-[#F07024] shrink-0"
        >
          <span>{t.seeAll}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Geolocation Sorting Pill Button */}
      <div className="mb-3 px-4 sm:px-6">
        <button
          type="button"
          onClick={onRequestLocation}
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
            userCoords
              ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
              : 'border-[#E2621B]/40 bg-[#E2621B]/10 text-[#E2621B] hover:bg-[#E2621B]/20'
          }`}
        >
          <LocateFixed className="w-3.5 h-3.5" />
          <span>{userCoords ? (language === 'mr' ? 'जवळच्या अंतरानुसार लावले' : 'Sorted by your GPS location') : t.sortByClosest}</span>
        </button>
        <p className="mt-1 text-[11px] text-[#827367]">
          {t.locationNote}
        </p>
      </div>

      {/* Horizontal Mandal Carousel */}
      <div className="flex gap-3 overflow-x-auto px-4 sm:px-6 pb-2 no-scrollbar scroll-smooth">
        {sortedMandals.map((mandal) => (
          <MandalCard
            key={mandal.id}
            mandal={mandal}
            isSaved={savedIds.includes(mandal.id)}
            distanceKm={calculateDistance(mandal.coordinates.lat, mandal.coordinates.lng)}
            onSelect={onSelectMandal}
            onToggleSave={() => onToggleSave(mandal.id)}
            layout="horizontal"
          />
        ))}
      </div>
    </section>
  );
};
