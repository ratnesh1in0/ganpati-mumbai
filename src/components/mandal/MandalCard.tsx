import React from 'react';
import { MapPin, Train, Bookmark } from 'lucide-react';
import { Mandal } from '../../data/mandalsData';
import { useLanguage } from '../../hooks/useLanguage';
import { LiveBadge } from '../common/LiveBadge';
import { GanpatiGlyph } from '../../assets/DevotionalIcons';

interface MandalCardProps {
  mandal: Mandal;
  isSaved?: boolean;
  distanceKm?: number | null;
  onSelect: (mandal: Mandal) => void;
  onToggleSave?: (e: React.MouseEvent) => void;
  layout?: 'grid' | 'horizontal';
}

export const MandalCard: React.FC<MandalCardProps> = ({
  mandal,
  isSaved = false,
  distanceKm,
  onSelect,
  onToggleSave,
  layout = 'grid'
}) => {
  const { language } = useLanguage();

  if (layout === 'horizontal') {
    return (
      <div
        onClick={() => onSelect(mandal)}
        className="surface group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--line)] transition-all duration-200 hover:-translate-y-1 hover:border-[#E2621B]/40 hover:shadow-xl active:scale-[0.985] w-[184px] shrink-0 scroll-snap-start cursor-pointer select-none"
      >
        {/* Top Banner Image with Glyph */}
        <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${mandal.gradientTheme} grid place-items-center overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="text-white/25 transform group-hover:scale-105 transition-transform duration-300">
            <GanpatiGlyph size={70} />
          </div>

          {/* Top Badges */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-[#F59E0B] border border-white/10 truncate max-w-[120px]">
              {language === 'mr' ? mandal.badgeMr : mandal.badge}
            </span>

            {onToggleSave && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(e);
                }}
                className="p-1 rounded-full bg-black/50 hover:bg-black/80 text-white/80 transition-colors"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#E2621B] text-[#E2621B]' : ''}`} />
              </button>
            )}
          </div>

          {/* Bottom Live Wait Badge */}
          <div className="absolute bottom-2 left-2">
            <LiveBadge
              status={mandal.crowd.status}
              waitMinutes={mandal.crowd.generalWaitMinutes}
              className="text-[10px] py-0.5 px-2"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col flex-1 gap-1">
          <h3 className="text-sm font-bold text-[#F5EBE1] line-clamp-1 group-hover:text-[#F59E0B] transition-colors font-display">
            {language === 'mr' ? mandal.nameMr : mandal.name}
          </h3>
          <p className="text-xs text-[#BDB0A4] line-clamp-1 font-marathi">
            {language === 'mr' ? mandal.popularTitleMr : mandal.nameMr}
          </p>

          <div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-[#827367]">
            <span className="flex items-center gap-1 truncate">
              <MapPin className="w-3 h-3 text-[#E2621B] shrink-0" />
              <span className="truncate">{language === 'mr' ? mandal.areaMr : mandal.area}</span>
            </span>
            {distanceKm !== null && distanceKm !== undefined && (
              <span className="font-bold text-[#F59E0B] shrink-0">
                {distanceKm} km
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Grid layout (used on Explore & Saved pages)
  return (
    <div
      onClick={() => onSelect(mandal)}
      className="surface group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] transition-all duration-200 hover:-translate-y-1 hover:border-[#E2621B]/40 hover:shadow-xl active:scale-[0.99] cursor-pointer"
    >
      {/* Visual Header */}
      <div className={`relative w-full aspect-[16/9] sm:aspect-[2/1] bg-gradient-to-br ${mandal.gradientTheme} grid place-items-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/25" />
        <div className="text-white/20 transform group-hover:scale-105 transition-transform duration-300">
          <GanpatiGlyph size={90} />
        </div>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[#F59E0B] border border-white/10">
            {language === 'mr' ? mandal.badgeMr : mandal.badge}
          </span>

          {onToggleSave && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(e);
              }}
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white/80 transition-colors"
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#E2621B] text-[#E2621B]' : ''}`} />
            </button>
          )}
        </div>

        {/* Live Wait & Area */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
          <LiveBadge
            status={mandal.crowd.status}
            waitMinutes={mandal.crowd.generalWaitMinutes}
          />
          {distanceKm !== null && distanceKm !== undefined && (
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-black/70 text-[#F59E0B]">
              {distanceKm} km away
            </span>
          )}
        </div>
      </div>

      {/* Body info */}
      <div className="p-4 flex flex-col flex-1 space-y-2">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5EBE1] group-hover:text-[#F59E0B] transition-colors font-display">
              {language === 'mr' ? mandal.nameMr : mandal.name}
            </h3>
          </div>
          <p className="text-xs text-[#BDB0A4] line-clamp-1 mt-0.5">
            {language === 'mr' ? mandal.popularTitleMr : mandal.popularTitle}
          </p>
        </div>

        <p className="text-xs text-[#827367] line-clamp-2 leading-relaxed">
          {language === 'mr' ? mandal.historyMr : mandal.history}
        </p>

        <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between text-xs text-[#827367]">
          <span className="flex items-center gap-1.5 text-[#BDB0A4]">
            <MapPin className="w-3.5 h-3.5 text-[#E2621B] shrink-0" />
            <span>{language === 'mr' ? mandal.areaMr : mandal.area}</span>
          </span>

          <span className="flex items-center gap-1 text-[11px] truncate max-w-[160px]">
            <Train className="w-3 h-3 text-[#F59E0B] shrink-0" />
            <span className="truncate">
              {language === 'mr' ? mandal.nearestStations[0]?.nameMr : mandal.nearestStations[0]?.name}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
